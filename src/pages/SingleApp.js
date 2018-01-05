import React from 'react'
import PropTypes from 'prop-types'
import { fetchApp } from 'utils/ApiClient'
import { Link } from 'react-router-dom'
import { Icon, Tab, Container, Menu } from 'semantic-ui-react'

import AppDetails from 'pages/AppDetails'
import AppLogs from 'pages/AppLogs'
import AppVersionHistory from 'pages/AppVersionHistory'

class SingleApp extends React.Component {
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

  state = {
    activeIndex: 0,
    appId: null,
    app: null,
  }

  componentWillMount() {
    const { match: { params: { appId, name } } } = this.props
    fetchApp(appId)
      .then(app => {
        this.setState({ app })
      })
      .catch(err => {
        // TODO add notification
        this.setState({ app: {} })
      })
    this.setState({ appId })
    switch (name) {
      case 'logs':
        this.setState({ activeIndex: 1 })
        break
      case 'version-history':
        this.setState({ activeIndex: 2 })
        break
      default:
        this.setState({ activeIndex: 0 })
    }
  }

  onTabChange(event, { activeIndex }) {
    const { appId } = this.state
    this.setState({ activeIndex })
    switch (activeIndex) {
      case 0:
        this.props.history.push('/apps/' + appId + '/details')
        break
      case 1:
        this.props.history.push('/apps/' + appId + '/logs')
        break
      case 2:
        this.props.history.push('/apps/' + appId + '/version-history')
        break
      default:
        break
    }
  }

  getPanes() {
    const { app } = this.state
    return [
      {
        menuItem: 'Details',
        render: () => <AppDetails app={app} />,
      },
      {
        menuItem: 'Logs',
        render: () => <AppLogs logs={app.logs} />,
      },
      {
        menuItem: 'Version History',
        render: () => <AppVersionHistory versions={app.versionhistory} />,
      },
    ]
  }

  render() {
    const { appId, app, activeIndex } = this.state

    if (!appId || !app) {
      return <div>FETCHING APP</div>
    }

    return (
      <Container fluid>
        <Menu borderless>
          <Menu.Item inverted as={Link} link to="/apps">
            <Icon name="left arrow" />
            Apps
          </Menu.Item>
          <Menu.Item>
            <Menu.Header as="h2">{app.name}</Menu.Header>
          </Menu.Item>
        </Menu>
        <Tab
          activeIndex={activeIndex}
          menu={{ secondary: true, pointing: true }}
          panes={this.getPanes()}
          onTabChange={this.onTabChange.bind(this)}
        />
      </Container>
    )
  }
}

export default SingleApp
