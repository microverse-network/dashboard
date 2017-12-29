import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import Home from 'pages/Home'
import Dashboard from 'pages/Dashboard'
import YourApps from 'pages/YourApps'
import ApiKeyManagement from 'pages/ApiKeyManagement'
import AccountSettings from 'pages/AccountSettings'
import Payment from 'pages/Payment'

import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'

import './App.css'

const App = () => (
  <Layout>
    <Navbar />
    <Sidebar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/apps" component={YourApps} />
      <Route exact path="/api-key" component={ApiKeyManagement} />
      <Route exact path="/account-settings" component={AccountSettings} />
      <Route exact path="/payment" component={Payment} />
    </Switch>
  </Layout>
)

export default App

const Layout = ({ children }) => <div>{children}</div>
