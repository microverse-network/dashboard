import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'
import Logo from 'components/Logo'

export default function Navbar() {
  return (
    <Menu fluid fixed="top" style={{ height: 60 }}>
      <Menu.Item style={{ width: 150 }} as={Link} link to="/">
        <Logo />
      </Menu.Item>
      <Menu.Menu
        style={{ borderRight: '1px solid rgba(34, 36, 38, 0.1)' }}
        position="right">
        <Menu.Item content="Profile" as={Link} link to="/#" position="right" />
        <Menu.Item as={Link} link to="/#">
          <Icon name="sign out" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

Navbar.propTypes = {}
