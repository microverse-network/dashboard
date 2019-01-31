import React from 'react'

const TabControls = () => {
  return (
    <div class="os-tabs-controls">
      <ul class="nav nav-tabs smaller">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Overview
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Sales
          </a>
        </li>
      </ul>
      <ul class="nav nav-pills smaller d-none d-md-flex">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Today
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            7 Days
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            14 Days
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Last Month
          </a>
        </li>
      </ul>
    </div>
  )
}

export default TabControls
