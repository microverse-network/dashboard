import React from 'react'
import {
  Icon,
  Button,
  Grid,
  List,
  Table,
  Label,
  Header,
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default function AppDetails({ app }) {
  return (
    <Grid divided="vertically" style={{ paddingTop: 20 }}>
      <Grid.Row columns={2}>
        <Grid.Column>
          <List style={{ fontWeight: '600' }}>
            <List.Item>Hash:</List.Item>
            <List.Item>Name:</List.Item>
            <List.Item>Version:</List.Item>
            <List.Item>Created:</List.Item>
            <List.Item>Labels:</List.Item>
            <List.Item>Healthcheck:</List.Item>
            <List.Item>Environment:</List.Item>
            <List.Item>Region:</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column>
          <List>
            <List.Item>{app.hash}</List.Item>
            <List.Item>{app.name}</List.Item>
            <List.Item>v{app.version}</List.Item>
            <List.Item>{app.meta.created.toString()}</List.Item>
            <List.Item>{app.labels.length}</List.Item>
            <List.Item>{app.healthcheck}</List.Item>
            <List.Item>{app.environment}</List.Item>
            <List.Item>{app.region}</List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
      <Header as="h4">Methods:</Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Signature</Table.HeaderCell>
            <Table.HeaderCell>Run</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {app.methods.map(method => {
            const { name, signature } = method
            return (
              <Table.Row key={name}>
                <Table.Cell>
                  <Label>{name}</Label>
                </Table.Cell>
                <Table.Cell>
                  <Label>{signature}</Label>
                </Table.Cell>
                <Table.Cell>
                  <Button animated>
                    <Button.Content visible>Next</Button.Content>
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
    </Grid>
  )
}

AppDetails.propTypes = {
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

AppDetails.defaultProps = {
  app: {
    _id: 'BVqz9Vyv51amjVEzFwXecRa8k023',
    hash: '0x543AB43A345BCD4D',
    name: 'Main rope',
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
