import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../../pages/Home'
import Workers from '../../pages/Workers'
import Peers from '../../pages/Peers'
import Databases from '../../pages/Databases'

import Layout from '../Layout'

import './theme.css'
import './style.css'

const AppView = props => {
  const home = () => <Home {...props} />
  const workers = () => <Workers {...props} />
  const peers = () => <Peers {...props} />
  const databases = () => <Databases {...props} />
  return (
    <Router>
      <Layout>
        <Route exact path="/" render={home} />
        <Route exact path="/workers" render={workers} />
        <Route exact path="/peers" render={peers} />
        <Route exact path="/databases" render={databases} />
      </Layout>
    </Router>
  )
}

export default AppView
