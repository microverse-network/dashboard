import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Icon } from 'semantic-ui-react'

export default class ServiceVersionHistory extends Component {
  static propTypes = {
    versions: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    const { versions } = this.props

    if (!versions.length) {
      return <div>No Logs found</div>
    }

    return (
      <Table striped celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Version</Table.HeaderCell>
            <Table.HeaderCell>Timestamp</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {versions.map(({ _id, version, timestamp }) => {
            return (
              <Table.Row key={_id}>
                <Table.Cell collapsing>v{version}</Table.Cell>
                <Table.Cell collapsing>{timestamp}</Table.Cell>
                <Table.Cell>
                  <Button size="mini" animated>
                    <Button.Content visible>Action</Button.Content>
                    <Button.Content hidden>
                      <Icon name="right arrow" />
                    </Button.Content>
                  </Button>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    )
  }
}
