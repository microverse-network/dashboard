import React from 'react'
import cx from 'classnames'

export default function Stat({
  size,
  highlight,
  centered,
  bold,
  value,
  label,
}) {
  const className = cx('el-tablo', size, {
    highlight,
    centered,
    'bold-label': bold,
  })

  return (
    <div className={className}>
      <div className="value">{value}</div>
      <div className="label">{label}</div>
    </div>
  )
}
