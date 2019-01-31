import React from 'react'
// import { Grid, Row, Col } from 'react-bootstrap'
// import Box from '../Box'
// import Stat from '../Stat'

const RecentDeploymentsPanel = () => {
  return (
    <div class="element-wrapper">
      <h6 class="element-header">Recent Deployments</h6>
      <div class="element-box-tp">
        <div class="activity-boxes-w">
          <div class="activity-box-w">
            <div class="activity-time">10 Min</div>
            <div class="activity-box">
              <div class="activity-info">
                <div class="activity-role">John Mayers</div>
                <strong class="activity-title">Opened New Account</strong>
              </div>
            </div>
          </div>
          <div class="activity-box-w">
            <div class="activity-time">2 Hours</div>
            <div class="activity-box">
              <div class="activity-info">
                <div class="activity-role">Ben Gossman</div>
                <strong class="activity-title">Posted Comment</strong>
              </div>
            </div>
          </div>
          <div class="activity-box-w">
            <div class="activity-time">5 Hours</div>
            <div class="activity-box">
              <div class="activity-info">
                <div class="activity-role">Phil Nokorin</div>
                <strong class="activity-title">Opened New Account</strong>
              </div>
            </div>
          </div>
          <div class="activity-box-w">
            <div class="activity-time">2 Days</div>
            <div class="activity-box">
              <div class="activity-info">
                <div class="activity-role">Jenny Miksa</div>
                <strong class="activity-title">Uploaded Image</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentDeploymentsPanel
