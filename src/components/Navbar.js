import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

export default class Navbar extends Component {
  render() {
    return (
      <Menu fixed="top" style={{ height: 60 }}>
        <Menu.Menu position="right">
          <Menu.Item content="Profile" as={Link} link to="/" />
          <Menu.Item as={Link} link to="/#">
            <Icon name="sign out" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
