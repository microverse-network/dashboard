import React from 'react'
import PropTypes from 'prop-types'
import AppDetails from 'pages/AppDetails'
import AppLogs from 'pages/AppLogs'
import AppVersionHistory from 'pages/AppVersionHistory'
import { Icon, Button, Header, Tab, Container } from 'semantic-ui-react'

const panes = [
  {
    menuItem: 'Details',
    render: () => <AppDetails />,
  },
  {
    menuItem: 'Logs',
    render: () => <AppLogs />,
  },
  {
    menuItem: 'Version History',
    render: () => <AppVersionHistory />,
  },
]

class SingleApp extends React.Component {
  state = {
    activeIndex: 0,
  }

  componentWillMount() {
    const { history: { location: { pathname } } } = this.props
    switch (pathname) {
      case '/apps/logs':
        this.setState({ activeIndex: 1 })
        break
      case '/apps/version-history':
        this.setState({ activeIndex: 2 })
        break
      default:
        this.setState({ activeIndex: 0 })
    }
  }

  onTabChange(event, { activeIndex }) {
    this.setState({ activeIndex })
    switch (activeIndex) {
      case 0:
        this.props.history.push('/apps/details')
        break
      case 1:
        this.props.history.push('/apps/logs')
        break
      case 2:
        this.props.history.push('/apps/version-history')
        break
      default:
        break
    }
  }

  onBackButtonClick = () => {
    this.props.history.push('/apps')
  }

  render() {
    const { app } = this.props
    const { activeIndex } = this.state

    return (
      <Container fluid>
        <Button animated onClick={this.onBackButtonClick}>
          <Button.Content visible>Apps</Button.Content>
          <Button.Content hidden>
            <Icon name="left arrow" />
          </Button.Content>
        </Button>
        <Header as="h2">
          {app.name}
          <Header.Subheader>
            v{app.version} - {app.limit}
          </Header.Subheader>
        </Header>
        <Tab
          activeIndex={activeIndex}
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          onTabChange={this.onTabChange.bind(this)}
        />
      </Container>
    )
  }
}

SingleApp.propTypes = {
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

SingleApp.defaultProps = {
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
      { name: 'Square', signature: 'Number, Function' },
      { name: 'Lookup', signature: 'String | Object, Function' },
    ],
  },
}

export default SingleApp
