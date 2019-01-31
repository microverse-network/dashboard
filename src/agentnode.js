import shortid from 'shortid'
import d from 'debug'
import _ from 'lodash'
import Node from 'microverse-core/lib/node'
import WebSocketBrowser from 'microverse-core/lib/transports/websocket/browser'

const debug = d('microverse:dashboard:agent')

const { config } = global.__microverse

export default class AgentNode extends Node {
  constructor() {
    const options = {
      id: `agent-${shortid.generate()}`,
      cluster: {},
      bootstrap: config.bootstrap.node,
      transportOptions: { constructor: WebSocketBrowser },
    }
    super(options)
    this.map = {}
    this.clusters = {}
    this.nodes = {}
    this.db.get('clusters').on('change', this.handleClusterChange.bind(this))
    this.db.get('nodes').on('change', this.handleNodeChange.bind(this))
    this.once('bootstrapped', this.update.bind(this))
    this.on('node.add', node => {
      return this.emit(`node.add-${node._id}`, node)
    })
  }

  async update() {
    const clusters = await this.db.get('clusters').find({})
    clusters.forEach(async cluster => {
      this.clusters[cluster._id] = cluster
      const nodes = await this.db.get('nodes').find({ clusterId: cluster._id })
      nodes.forEach(node => {
        this.nodes[node._id] = node
        this.emit('node.add', node)
      })
    })
  }

  handleClusterChange(id, cluster) {
    if (cluster) {
      if (this.clusters[id]) {
        debug('cluster %s is updated %o', id, cluster)
      } else {
        debug('new cluster is created %s %o', id, cluster)
      }
      this.clusters[id] = cluster
      this.emit('cluster.set', id, cluster)
    }
  }

  handleNodeChange(id, node) {
    if (node) {
      const current = this.nodes[id]
      if (current) {
        return _.difference(node.connections, current.connections).forEach(
          peer => {
            debug('peer added %s %s', node._id, peer)
            const callback = () => {
              this.nodes[id].connections = node.connections
              this.emit('peer.add', node, this.nodes[peer])
            }
            if (this.nodes[peer]) {
              return callback()
            }
            this.once(`node.add-${peer}`, callback)
          },
        )
      }
      this.nodes[id] = node
      this.emit('node.add', node)
      if (node.clusterId) {
        this._debug('node %s has joined to cluster %s', id, node.clusterId)
        if (node.clusterId) {
          this.emit('cluster.join', node)
        }
      }
      node.connections.forEach(peer => {
        const callback = () => this.emit('peer.add', node, this.nodes[peer])
        if (this.nodes[peer]) {
          return callback()
        }
        this.once(`node.add-${peer}`, callback)
      })
    } else {
      this.emit('node.remove', this.nodes[id])
      delete this.nodes[id]
    }
  }
}
