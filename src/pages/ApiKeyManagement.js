import React from 'react'
import PropTypes from 'prop-types'
import { NotificationManager } from 'react-notifications'
import { filter } from 'lodash'
import { Table, Button, Input, Grid } from 'semantic-ui-react'
import { loadApiKeys } from 'utils/ApiClient'
import AreYouSureModal from 'components/AreYouSureModal'
import CopyToClipboard from 'copy-to-clipboard'

class ApiKeyManagement extends React.Component {
  static propTypes = {
    keys: PropTypes.array,
  }

  state = {
    isModalOpen: false,
    keys: null,
    keyName: '',
  }

  componentWillMount() {
    loadApiKeys()
      .then(keys => {
        this.setState({ keys })
      })
      .catch(err => {
        // TODO add notification
        this.setState({ keys: [] })
      })
  }

  onCloseClick = () => this.setState({ isModalOpen: false })

  onRemoveClick = () => {
    this.setState({ isModalOpen: true })
  }

  onClipboardClick = (name, key) => {
    NotificationManager.success(`${name} copied!`)
    CopyToClipboard(key)
  }

  onPlusButtonClick = () => {
    const { keyName } = this.state
    const newKey = {
      name: keyName,
      key: 'dcce6bef-73c4-4ef3-bba6-1c1d5e583a32',
      createdAt: new Date(),
    }
    var { keys } = this.state
    keys.push(newKey)
    this.setState({ keyName: '', keys })
  }

  removeKey = keyName => {
    const { keys } = this.state
    const newKeys = filter(keys, ({ name }) => keyName !== name)
    this.setState({ isModalOpen: false, keys: newKeys })
  }

  onInputChange = event => {
    const { value: keyName } = event.target
    this.setState({ keyName })
  }

  render() {
    const { keyName, keys, isModalOpen } = this.state
    if (!keys) {
      return <div>Fetching your api keys</div>
    }

    return (
      <div>
        <Table basic="very" striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Value</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {keys.map(({ name, key, createdAt }) => {
              return (
                <Table.Row key={name}>
                  <Table.Cell collapsing>{name}</Table.Cell>
                  <Table.Cell>{key}</Table.Cell>
                  <Table.Cell collapsing>
                    <Button
                      basic
                      icon="clipboard"
                      onClick={this.onClipboardClick.bind(this, name, key)}
                    />
                    <Button
                      negative
                      basic
                      icon="trash outline"
                      onClick={this.onRemoveClick.bind(this, name)}
                    />
                    <AreYouSureModal
                      content={'Do you really want to remove this key?'}
                      onYesClick={this.removeKey.bind(this, name)}
                      onCloseClick={this.onCloseClick}
                      isOpen={isModalOpen}
                    />
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
        <Grid>
          <Grid.Column width={14}>
            <Input
              ref={this.handleRef}
              placeholder="Add New Api Key..."
              value={keyName}
              fluid
              basic="very"
              onChange={this.onInputChange}
            />
          </Grid.Column>
          <Grid.Column width={2}>
            <Button
              icon="plus"
              primary
              content="Add New Key"
              floated="right"
              onClick={this.onPlusButtonClick}
            />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default ApiKeyManagement
