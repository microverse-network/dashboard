import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Apps from 'pages/Apps'
import SingleApp from 'pages/SingleApp'

export default function YourApps() {
  return (
    <Switch>
      <Route exact path="/apps" component={Apps} />
      <Route path="/apps/:appId/:name?" component={SingleApp} />
    </Switch>
  )
}
