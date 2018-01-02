import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Icon } from 'semantic-ui-react'

export default function AppVersionHistory({ versions }) {
  if (!versions.length) {
    return <div>No Logs found</div>
  }
  return (
    <Table unstackable>
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
              <Table.Cell>v{version}</Table.Cell>
              <Table.Cell>{timestamp}</Table.Cell>
              <Table.Cell>
                <Button animated>
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

AppVersionHistory.propTypes = {
  versions: PropTypes.array,
}

AppVersionHistory.defaultProps = {
  versions: [
    {
      _id: 1,
      version: 0.1,
      timestamp: new Date().toString(),
    },
    {
      _id: 2,
      version: 0.2,
      timestamp: new Date().toString(),
    },
    {
      _id: 3,
      version: 0.3,
      timestamp: new Date().toString(),
    },
    {
      _id: 4,
      version: 0.4,
      timestamp: new Date().toString(),
    },
    {
      _id: 5,
      version: 0.5,
      timestamp: new Date().toString(),
    },
    {
      _id: 6,
      version: 0.6,
      timestamp: new Date().toString(),
    },
  ],
}
