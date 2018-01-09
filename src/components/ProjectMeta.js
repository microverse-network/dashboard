import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

export default class ProjectMeta extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired,
  }

  render() {
    const { project } = this.props

    return (
      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>Hash:</Table.Cell>
            <Table.Cell>{project.hash}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Name:</Table.Cell>
            <Table.Cell>{project.name}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Version:</Table.Cell>
            <Table.Cell>v{project.version}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Created:</Table.Cell>
            <Table.Cell>{project.meta.created.toString()}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Labels:</Table.Cell>
            <Table.Cell>{project.labels.length}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Healthcheck:</Table.Cell>
            <Table.Cell>{project.healthcheck}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Environment:</Table.Cell>
            <Table.Cell>{project.environment}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Region:</Table.Cell>
            <Table.Cell>{project.region}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}
