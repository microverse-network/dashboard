import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Container,
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header,
} from 'semantic-ui-react'

export default function Menubar() {
  return (
    <Sidebar
      as={Menu}
      visible={true}
      style={{ top: 60 }}
      width="thin"
      icon="labeled"
      vertical>
      <Menu.Item name="dashboard" as={Link} link to="/dashboard">
        <Icon name="dashcube" />
        Dashboard
      </Menu.Item>
      <Menu.Item name="browser" as={Link} link to="/apps">
        <Icon name="browser" />
        Your Apps
      </Menu.Item>
      <Menu.Item name="key" as={Link} link to="/api-key">
        <Icon name="key" />
        Api Key Management
      </Menu.Item>
      <Menu.Item name="setting" as={Link} link to="/account-settings">
        <Icon name="setting" />
        Account Settings
      </Menu.Item>
      <Menu.Item name="payment" as={Link} link to="/payment">
        <Icon name="payment" />
        Payment
      </Menu.Item>
    </Sidebar>
  )
}

Menubar.propTypes = {}
