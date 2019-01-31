import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
  return (
    <ul class="breadcrumb">
      <li class="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li class="breadcrumb-item">
        <span>Dashboard</span>
      </li>
    </ul>
  )
}

export default Breadcrumb
