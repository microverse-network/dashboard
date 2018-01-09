import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import Home from 'pages/Home'
import Dashboard from 'pages/Dashboard'
import Projects from 'pages/Projects'
import ApiKeyManagement from 'pages/ApiKeyManagement'
import AccountSettings from 'pages/AccountSettings'
import NewProject from 'pages/NewProject'
import Layout from 'components/Layout'

import './App.css'
import 'react-notifications/lib/notifications.css'
import { NotificationContainer } from 'react-notifications'

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/projects/:projectId?/:name?" component={Projects} />
      <Route exact path="/newproject" component={NewProject} />
      <Route exact path="/api-key" component={ApiKeyManagement} />
      <Route exact path="/account-settings" component={AccountSettings} />
    </Switch>
    <NotificationContainer />
  </Layout>
)

export default App
