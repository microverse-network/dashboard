export function registerAgentNode(node) {
  return {
    type: 'AGENT_NODE_REGISTERED',
    payload: node,
  }
}

export function fetchNodes(node) {
  return {
    type: 'FETCH_NODES',
    payload: node.db.get('nodes').find({}),
  }
}

export function addNode(node) {
  return {
    type: 'NODE_ADDED',
    payload: node,
  }
}

export function removeNode(node) {
  return {
    type: 'NODE_REMOVED',
    payload: node,
  }
}

export function fetchCollections(node) {
  return {
    type: 'COLLECTIONS_FETCHED',
    payload: node.db.list(),
  }
}

export function fetchObjectCount(node) {
  return dispatch => {
    const collections = node.db.list()
    Promise.all(collections.map(c => c.count({}))).then(counts => {
      const objectCount = counts.reduce((a, c) => a + c, 0)
      return dispatch({
        type: 'OBJECT_COUNT_FETCHED',
        payload: objectCount,
      })
    })
  }
}
