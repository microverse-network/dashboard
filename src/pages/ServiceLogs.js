import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

export default function ServiceLogs({ logs }) {
  if (!logs.length) {
    return <div>No Logs found</div>
  }

  return (
    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Service</Table.HeaderCell>
          <Table.HeaderCell>Timestamp</Table.HeaderCell>
          <Table.HeaderCell>Message</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {logs.map(({ _id, service, timestamp, message }) => {
          return (
            <Table.Row key={_id}>
              <Table.Cell collapsing>{service}</Table.Cell>
              <Table.Cell collapsing>{timestamp}</Table.Cell>
              <Table.Cell>
                <code>{message}</code>
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  )
}

ServiceLogs.propTypes = {
  logs: PropTypes.array,
}
