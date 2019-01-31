import React from 'react'
// import Graph from '../helpers/p2p-graph'
import { fetchPeers, fetchDataConnections } from '../utils/ApiClient'
import randomColor from 'randomcolor'
import Graph from 'react-graph-vis'

import Box from './Box'

export default class P2PGraphView extends React.Component {
  state = {
    nodes: [],
    edges: [],
  }

  addEvents() {
    this.props.node
      .on('node.remove', node => {
        if (!node) return
        var { nodes, edges } = this.state
        nodes = nodes.filter(({ id }) => id !== node._id)
        edges = edges.filter(
          ({ from, to }) => from !== node._id || to !== node._id
        )
        this.setState({ nodes, edges })
      })
      .on('node.add', node => {
        var { nodes } = this.state
        const newData = {
          id: node._id,
          label: node._id,
          color: randomColor({
            luminosity: 'light',
            hue: 'blue',
          }),
        }
        nodes.push(newData)
        this.setState({ nodes })
      })
      .on('peer.add', (node, peer) => {
        var { edges } = this.state
        const newData = { from: node._id, to: peer._id }
        edges.push(newData)
        this.setState({ edges })
      })
  }

  componentDidMount() {
    const { node } = this.props
    var { nodes, edges } = this.state
    Object.keys(node.nodes).forEach(name => {
      const peer = node.nodes[name]
      const newData = {
        id: name,
        label: name,
        color: randomColor({
          luminosity: 'light',
          hue: 'blue',
        }),
      }
      nodes.push(newData)
      peer.connections.forEach(peerId => {
        const newData = { from: name, to: peerId }
        edges.push(newData)
      })
    })
    this.setState({ nodes, edges })
    this.addEvents()
  }

  componentWillUnmount() {
    this.props.node.removeListener('node.add')
    this.props.node.removeListener('peer.add')
  }

  render() {
    // clean up nodes and edges, remove duplicated ones
    const nodes = this.state.nodes.filter(
      (thing, index, self) =>
        index ===
        self.findIndex(t => t.id === thing.id && t.label === thing.label)
    )

    const edges = this.state.edges.filter(
      (thing, index, self) =>
        index ===
        self.findIndex(t => t.from === thing.from && t.to === thing.to)
    )

    const graph = { nodes, edges }

    const options = {
      nodes: {
        shape: 'dot',
        font: '12px Rubik black',
        size: 10,
      },
      layout: {
        improvedLayout: true,
        hierarchical: false,
      },
      edges: {
        smooth: false,
        color: '#000000',
        width: 0.5,
        arrows: {
          to: {
            enabled: false,
            scaleFactor: 0.5,
          },
        },
      },
      interaction: {
        zoomView: false,
      },
    }

    const events = {
      select: event => {
        const { nodes, edges } = event
        console.log({ nodes, edges })
      },
    }

    return (
      <Box>
        <Graph
          graph={graph}
          options={options}
          events={events}
          style={{ height: '60vh', minHeight: 500 }}
        />
      </Box>
    )
  }
}
