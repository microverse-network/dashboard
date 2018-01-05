import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

export default function AppLogs({ logs }) {
  if (!logs.length) {
    return <div>No Logs found</div>
  }

  return (
    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>App</Table.HeaderCell>
          <Table.HeaderCell>Timestamp</Table.HeaderCell>
          <Table.HeaderCell>Message</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {logs.map(({ _id, app, timestamp, message }) => {
          return (
            <Table.Row key={_id}>
              <Table.Cell collapsing>{app}</Table.Cell>
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

AppLogs.propTypes = {
  logs: PropTypes.array,
}
