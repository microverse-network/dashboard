import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Header } from 'semantic-ui-react'

import AppMeta from 'components/AppMeta'
import AppMethods from 'components/AppMethods'

export default class AppDetails extends Component {
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

  // TODO: remove
  static defaultProps = {
    app: {
      _id: 'BVqz9Vyv51amjVEzFwXecRa8k023',
      hash: '0x543AB43A345BCD4D',
      name: 'Main app',
      limit: '300 calls/min',
      version: '2.5',
      meta: {
        created: new Date(),
      },
      labels: [],
      healthcheck: 'Running',
      environment: 'Chrome 63.0',
      region: 'Node',
      methods: [
        { name: 'square', signature: 'Number, Function' },
        { name: 'lookup', signature: 'String | Object, Function' },
      ],
    },
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
