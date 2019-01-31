import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserMenu from './usermenu'
import Logo from './logo'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="desktop-menu menu-side-w menu-activated-on-click">
        <Logo title="MICROVERSE" />
        <div className="menu-and-user">
          <UserMenu />
          <ul className="main-menu">
            <li>
              <Link to="/">
                <div className="icon-w">
                  <div className="os-icon os-icon-window-content" />
                </div>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/peers">
                <div className="icon-w">
                  <div className="os-icon os-icon-hierarchy-structure-2" />
                </div>
                <span>Peers</span>
              </Link>
            </li>
            <li>
              <Link to="/workers">
                <div className="icon-w">
                  <div className="os-icon os-icon-robot-1" />
                </div>
                <span>Workers</span>
              </Link>
            </li>
            <li>
              <Link to="/databases">
                <div className="icon-w">
                  <div className="os-icon os-icon-grid-squares-2" />
                </div>
                <span>Databases</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
