import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducers from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = composeEnhancers(applyMiddleware(promise(), thunk))

export default createStore(reducers, middleware)
