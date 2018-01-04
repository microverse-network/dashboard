import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Sidebar as SemanticSidebar, Menu, Icon } from 'semantic-ui-react'

import Logo from 'components/Logo'

export default class Sidebar extends Component {
  render() {
    return (
      <SemanticSidebar
        as={Menu}
        vertical
        inverted
        visible={true}
        width="thin"
        icon="labeled">
        <Menu.Item
          as={Link}
          link
          to="/"
          style={{
            height: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Logo inverted />
        </Menu.Item>
        <Menu.Item as={Link} link to="/dashboard">
          <Icon name="dashcube" />
          Dashboard
        </Menu.Item>
        <Menu.Item as={Link} link to="/apps">
          <Icon name="browser" />
          Your Apps
        </Menu.Item>
        <Menu.Item as={Link} link to="/api-key">
          <Icon name="key" />
          Api Key Management
        </Menu.Item>
        <Menu.Item as={Link} link to="/account-settings">
          <Icon name="setting" />
          Account Settings
        </Menu.Item>
      </SemanticSidebar>
    )
  }
}
