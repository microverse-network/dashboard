import React from 'react'
import PropTypes from 'prop-types'

import './CenteredContainer.css'

export default function CenteredContainer({
  height = '100vh',
  children,
  style,
}) {
  return (
    <div className="CenteredContainer" style={{ ...style, height }}>
      {children}
    </div>
  )
}

CenteredContainer.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
}
