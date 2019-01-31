import _ from 'lodash'

const nodes = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_NODES_FULFILLED':
      const nodes = action.payload
      state = [...nodes]
      break
    case 'NODE_ADDED':
      const node = action.payload
      if (!_.find(state, { _id: node._id })) {
        state = [...state, node]
      }
      break
    case 'NODE_REMOVED': {
      const node = action.payload
      const nodes = _.remove(...state, n => n._id === node._id)
      state = nodes
      break
    }
  }
  return state
}

export default nodes
