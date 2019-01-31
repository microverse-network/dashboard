import React from 'react'
import _ from 'lodash'
import { Doughnut } from 'react-chartjs-2'
import { Col } from 'react-bootstrap'
import { dbData, dbOptions } from './data'

const DatabasesChart = () => {
  return (
    <Col sm={3}>
      <div class="element-wrapper">
        <h6 class="element-header">Database Allocation</h6>
        <div class="element-box">
          <div class="el-chart-w">
            <Doughnut
              height={180}
              width={180}
              data={dbData}
              options={dbOptions}
            />
            <div class="inside-donut-chart-label">
              <strong>{_.sum(dbData.datasets[0].data)}</strong>
              <span>Databases</span>
            </div>
          </div>
          <div class="el-legend">
            <div class="legend-value-w">
              <div class="legend-pin" style={{ backgroundColor: '#6896f9' }} />
              <div class="legend-value">Idle</div>
            </div>
            <div class="legend-value-w">
              <div class="legend-pin" style={{ backgroundColor: '#85c751' }} />
              <div class="legend-value">Used</div>
            </div>
            <div class="legend-value-w">
              <div class="legend-pin" style={{ backgroundColor: '#d97b70' }} />
              <div class="legend-value">Backup</div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default DatabasesChart
