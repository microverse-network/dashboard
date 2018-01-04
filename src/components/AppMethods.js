import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Label, Button, Icon } from 'semantic-ui-react'

export default class AppMethods extends Component {
  static propTypes = {
    app: PropTypes.shape({
      methods: PropTypes.arrayOf(PropTypes.object),
    }),
  }

  renderMethod({ name, signature }) {
    return (
      <Table.Row key={name}>
        <Table.Cell collapsing>
          <strong>{name}</strong>
        </Table.Cell>
        <Table.Cell collapsing>
          <Label>
            <code>{signature}</code>
          </Label>
        </Table.Cell>
        <Table.Cell>
          <Button size="mini" animated>
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
              <Icon name="right arrow" />
            </Button.Content>
          </Button>
        </Table.Cell>
      </Table.Row>
    )
  }

  render() {
    const { methods } = this.props.app

    return (
      <Table celled striped definition>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Signature</Table.HeaderCell>
            <Table.HeaderCell>Run</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {methods.map(method => this.renderMethod(method))}
        </Table.Body>
      </Table>
    )
  }
}
