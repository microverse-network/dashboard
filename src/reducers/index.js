import { combineReducers } from 'redux'

import workers from './workers'
import node from './node'
import nodes from './nodes'
import collections from './collections'

export default combineReducers({
  node,
  nodes,
  workers,
  collections,
})
