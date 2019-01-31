import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Sidebar from './Sidebar'
import Breadcrumb from './breadcrumb'

export default class Layout extends Component {
  render() {
    return (
      <div className="all-wrapper menu-side with-side-panel">
        <div className="layout-w">
          <Sidebar />
          <div className="content-w">
            <Breadcrumb />
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.array,
}
