import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AppView from '../components/app'
import {
  addNode,
  removeNode,
  fetchNodes,
  fetchCollections,
  fetchObjectCount,
  registerAgentNode,
} from '../actions'

class App extends Component {
  componentDidMount() {
    const {
      node,
      addNode,
      removeNode,
      fetchNodes,
      fetchCollections,
      fetchObjectCount,
      registerAgentNode,
    } = this.props

    registerAgentNode(node)
    fetchNodes(node)
    fetchCollections(node)
    fetchObjectCount(node)

    node.on('node.add', addNode)
    node.on('node.remove', removeNode)
  }

  render() {
    return <AppView {...this.props} />
  }
}

const mapStateToProps = store => {
  return {
    nodes: store.nodes,
    collections: store.collections,
    workers: store.workers,
  }
}

App.propTypes = {
  node: PropTypes.object.isRequired,
  addNode: PropTypes.func.isRequired,
  removeNode: PropTypes.func.isRequired,
  fetchNodes: PropTypes.func.isRequired,
  fetchCollections: PropTypes.func.isRequired,
  fetchObjectCount: PropTypes.func.isRequired,
  registerAgentNode: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => {
  return {
    addNode: node => dispatch(addNode(node)),
    removeNode: node => dispatch(removeNode(node)),
    fetchNodes: node => dispatch(fetchNodes(node)),
    fetchCollections: node => dispatch(fetchCollections(node)),
    fetchObjectCount: node => dispatch(fetchObjectCount(node)),
    registerAgentNode: node => dispatch(registerAgentNode(node)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
