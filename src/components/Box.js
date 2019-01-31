import React from 'react'
import cx from 'classnames'

export default function Box({ className, children, ...props }) {
  return (
    <div className={cx('element-box', className)} {...props}>
      {children}
    </div>
  )
}
