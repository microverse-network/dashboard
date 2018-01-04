import React, { Component } from 'react'

import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        {this.props.children}
      </div>
    )
  }
}
