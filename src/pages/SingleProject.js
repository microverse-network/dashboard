import React from 'react'
import PropTypes from 'prop-types'
import { fetchProject } from 'utils/ApiClient'
import { Link } from 'react-router-dom'
import { Icon, Tab, Container, Menu } from 'semantic-ui-react'

import ServiceDetails from 'pages/ServiceDetails'
import ServiceLogs from 'pages/ServiceLogs'
import ServiceVersionHistory from 'pages/ServiceVersionHistory'

class SingleProject extends React.Component {
  static propTypes = {
    project: PropTypes.shape({
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
    projectId: null,
    project: null,
  }

  componentWillMount() {
    const { match: { params: { projectId, name } } } = this.props
    fetchProject(projectId)
      .then(project => {
        this.setState({ project })
      })
      .catch(err => {
        // TODO add notification
        this.setState({ project: {} })
      })
    this.setState({ projectId })
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
    const { projectId } = this.state
    this.setState({ activeIndex })
    switch (activeIndex) {
      case 0:
        this.props.history.push('/projects/' + projectId + '/details')
        break
      case 1:
        this.props.history.push('/projects/' + projectId + '/logs')
        break
      case 2:
        this.props.history.push('/projects/' + projectId + '/version-history')
        break
      default:
        break
    }
  }

  getPanes() {
    const { project } = this.state
    return [
      {
        menuItem: 'Details',
        render: () => <ServiceDetails project={project} />,
      },
      {
        menuItem: 'Logs',
        render: () => <ServiceLogs logs={project.logs} />,
      },
      {
        menuItem: 'Version History',
        render: () => (
          <ServiceVersionHistory versions={project.versionhistory} />
        ),
      },
    ]
  }

  render() {
    const { projectId, project, activeIndex } = this.state

    if (!projectId || !project) {
      return <div>FETCHING Project</div>
    }

    return (
      <Container fluid>
        <Menu borderless>
          <Menu.Item inverted={'true'} as={Link} link to="/projects">
            <Icon name="left arrow" />
            Projects
          </Menu.Item>
          <Menu.Item>
            <Menu.Header as="h2">{project.name}</Menu.Header>
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

export default SingleProject
