import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Apps from 'pages/Apps'
import SingleProject from 'pages/SingleProject'

export default function Projects() {
  return (
    <Switch>
      <Route exact path="/projects" component={Apps} />
      <Route path="/projects/:projectId/:name?" component={SingleProject} />
    </Switch>
  )
}
