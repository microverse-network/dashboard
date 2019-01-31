import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class Logo extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  static defaultProps = {
    dark: false,
  }

  render() {
    const { title } = this.props

    return (
      <div class="logo-w">
        <Link class="logo" to="/">
          <div class="logo-label">{title}</div>
        </Link>
      </div>
    )
  }
}
