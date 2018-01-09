import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'
import ProjectMeta from 'components/ProjectMeta'
import ProjectMethods from 'components/ProjectMethods'

class ServiceDetails extends Component {
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

  render() {
    const { project } = this.props

    return (
      <div>
        <ProjectMeta project={project} />
        <Header as="h4">Methods:</Header>
        <ProjectMethods project={project} />
      </div>
    )
  }
}

export default ServiceDetails
