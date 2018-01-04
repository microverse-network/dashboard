import React, { Component } from 'react'

import Sidebar from 'components/Sidebar'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        {this.props.children}
      </div>
    )
  }
}
