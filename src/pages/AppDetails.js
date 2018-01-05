import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Header } from 'semantic-ui-react'

import AppMeta from 'components/AppMeta'
import AppMethods from 'components/AppMethods'

class AppDetails extends Component {
  static propTypes = {
    app: PropTypes.shape({
      _id: PropTypes.string,
      hash: PropTypes.string,
      name: PropTypes.string,
      limit: PropTypes.string,
      version: PropTypes.string,
      meta: PropTypes.shape({
        created: PropTypes.instanceOf(Date),
      }),
      labels: PropTypes.array,
      healthcheck: PropTypes.string,
      environment: PropTypes.string,
      region: PropTypes.string,
      methods: PropTypes.array,
    }),
  }

  render() {
    const { app } = this.props

    return (
      <div>
        <AppMeta app={app} />
        <Header as="h4">Methods:</Header>
        <AppMethods app={app} />
      </div>
    )
  }
}

export default AppDetails
