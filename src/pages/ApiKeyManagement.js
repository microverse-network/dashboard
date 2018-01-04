import React from 'react'
import PropTypes from 'prop-types'
import { NotificationManager } from 'react-notifications'

import { Divider, Item, Button } from 'semantic-ui-react'

import AreYouSureModal from 'components/AreYouSureModal'
import CopyToClipboard from 'copy-to-clipboard'

export default class ApiKeyManagement extends React.Component {
  static defaultProps = {
    keys: [
      {
        key: 'dcce6bef-73c4-4ef3-bba6-1c1d5e583a3d',
        createdAt: '29 days ago',
        disabled: false,
      },
      {
        key: 'dcce6bef-73c4-4ef3-bba6-1c1d5e583a32',
        createdAt: '12 days ago',
        disabled: true,
      },
    ],
  }

  static propTypes = {
    keys: PropTypes.array,
  }

  state = {
    isModalOpen: false,
  }

  onCloseClick = () => this.setState({ isModalOpen: false })

  onRemoveClick = () => this.setState({ isModalOpen: true })

  onClipboardClick = key => {
    NotificationManager.success('Copied!', key)
    CopyToClipboard(key)
  }

  onPlusButtonClick() {
    console.log('plus button clicked!')
  }

  removeKey = () => {
    this.setState({ isModalOpen: false })
  }

  render() {
    const { keys } = this.props
    const { isModalOpen } = this.state
    return (
      <div>
        <Button
          circular
          icon="plus"
          floated="right"
          onClick={this.onPlusButtonClick}
          style={{ marginBottom: 20 }}
        />
        <Divider clearing />
        <Item.Group divided>
          {keys.map(({ key, createdAt, disabled }) => {
            return (
              <Item key={key}>
                <Item.Content>
                  <Item.Header>{key}</Item.Header>
                  <Item.Meta>Updated {createdAt}</Item.Meta>
                </Item.Content>
                <Item.Content>
                  <Button
                    negative
                    basic
                    icon="trash outline"
                    floated="right"
                    onClick={this.onRemoveClick}
                  />
                  <Button
                    basic
                    icon="clipboard"
                    floated="right"
                    onClick={this.onClipboardClick.bind(this, key)}
                  />
                  <Button basic floated="right">
                    Disable
                  </Button>
                  <AreYouSureModal
                    content={'Do you really want to remove this key?'}
                    onYesClick={this.removeKey}
                    onCloseClick={this.onCloseClick}
                    isOpen={isModalOpen}
                  />
                </Item.Content>
              </Item>
            )
          })}
        </Item.Group>
      </div>
    )
  }
}
