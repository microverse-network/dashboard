import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

export default class AppMeta extends Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
  }

  render() {
    const { app } = this.props

    return (
      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>Hash:</Table.Cell>
            <Table.Cell>{app.hash}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Name:</Table.Cell>
            <Table.Cell>{app.name}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Version:</Table.Cell>
            <Table.Cell>v{app.version}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Created:</Table.Cell>
            <Table.Cell>{app.meta.created.toString()}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Labels:</Table.Cell>
            <Table.Cell>{app.labels.length}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Healthcheck:</Table.Cell>
            <Table.Cell>{app.healthcheck}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Environment:</Table.Cell>
            <Table.Cell>{app.environment}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Region:</Table.Cell>
            <Table.Cell>{app.region}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}
