import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

export default function Logo({ size = 'medium' }) {
  return <Header size={size}>MICROVERSE</Header>
}

Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'huge']),
}

