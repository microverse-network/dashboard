import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

export default class Logo extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large', 'huge']),
    inverted: PropTypes.bool,
  }

  static defaultProps = {
    size: 'medium',
    inverted: false,
  }

  render() {
    const { size, inverted } = this.props

    return (
      <Header size={size} inverted={inverted}>
        MICROVERSE
      </Header>
    )
  }
}
