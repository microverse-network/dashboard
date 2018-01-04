import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import Home from 'pages/Home'
import Dashboard from 'pages/Dashboard'
import YourApps from 'pages/YourApps'
import ApiKeyManagement from 'pages/ApiKeyManagement'
import AccountSettings from 'pages/AccountSettings'

import Layout from 'components/Layout'

import './App.css'
import 'react-notifications/lib/notifications.css'
import { NotificationContainer } from 'react-notifications'

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/apps/:name?" component={YourApps} />
      <Route exact path="/api-key" component={ApiKeyManagement} />
      <Route exact path="/account-settings" component={AccountSettings} />
    </Switch>
    <NotificationContainer />
  </Layout>
)

export default App
