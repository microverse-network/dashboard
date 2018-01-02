import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

export default function AppLogs({ logs }) {
  if (!logs.length) {
    return <div>No Logs found</div>
  }
  return (
    <Table unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>App</Table.HeaderCell>
          <Table.HeaderCell>Timestamp</Table.HeaderCell>
          <Table.HeaderCell textAlign="right">Message</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {logs.map(({ _id, app, timestamp, message }) => {
          return (
            <Table.Row key={_id}>
              <Table.Cell>{app}</Table.Cell>
              <Table.Cell>{timestamp}</Table.Cell>
              <Table.Cell textAlign="right">{message}</Table.Cell>
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

AppLogs.defaultProps = {
  logs: [
    {
      _id: 1,
      app: 'Main rope',
      timestamp: new Date().toString(),
      message: '171228/195556.769 [response]: [1;32mget[0m /healthcheck {} [32m200[0m (2ms)',
    },
    {
      _id: 2,
      app: 'Main rope',
      timestamp: new Date().toString(),
      message: '171228/195556.769 [response]: [1;32mget[0m /healthcheck {} [32m200[0m (2ms)',
    },
    {
      _id: 3,
      app: 'Main rope',
      timestamp: new Date().toString(),
      message: '171228/195556.769 [response]: [1;32mget[0m /healthcheck {} [32m200[0m (2ms)',
    },
    {
      _id: 4,
      app: 'Main rope',
      timestamp: new Date().toString(),
      message: '171228/195556.769 [response]: [1;32mget[0m /healthcheck {} [32m200[0m (2ms)',
    },
    {
      _id: 5,
      app: 'Main rope',
      timestamp: new Date().toString(),
      message: '171228/195556.769 [response]: [1;32mget[0m /healthcheck {} [32m200[0m (2ms)',
    },
    {
      _id: 6,
      app: 'Main rope',
      timestamp: new Date().toString(),
      message: '171228/195556.769 [response]: [1;32mget[0m /healthcheck {} [32m200[0m (2ms)',
    },
  ],
}
