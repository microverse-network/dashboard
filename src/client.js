import { render } from 'react-dom'
import React from 'react'
import { Provider, connect } from 'react-redux'
import store from './store'
import AgentNode from './agentnode'

const agent = new AgentNode()

const MOUNT_NODE = document.getElementById('root')

const App = connect(state => state)(() => {
  let App = require('./pages/App').default
  return <App node={agent} />
})

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function init() {
  render(<Main />, MOUNT_NODE)
}

if (module.hot) {
  // require('/devtools');
  module.hot.accept('./pages/App.js', () => {
    requestAnimationFrame(init)
  })
}

init()
