import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'
import { Col } from 'react-bootstrap'
import numeral from 'numeral'
import moment from 'moment'

import Box from '../Box'
import TabControls from './tabcontrols'
import { data, options } from './data'

const n = number => numeral(number).format('0,0')

export default class PeersChart extends Component {
  state = {
    data: {},
  }

  static propTypes = {
    peers: PropTypes.array.isRequired,
  }

  updateChartData(peers) {
    const d_ = []
    let i = 0
    data.labels = peers.map(d => {
      d_.push(i++)
      return moment(d.createdAt).valueOf()
    })
    data.labels.sort()
    data.datasets[0].data = d_
    options.scales.yAxes[0].ticks.max = peers.length * 2
    this.setState({ data })
  }

  componentDidMount() {
    const { peers } = this.props
    this.updateChartData(peers)
  }

  componentWillReceiveProps(nextProps) {
    const { peers } = nextProps
    this.updateChartData(peers)
  }

  render() {
    const { peers } = this.props
    const { data } = this.state
    return (
      <Col sm={9}>
        <div class="element-wrapper">
          <h6 class="element-header">Total Peers</h6>
          <Box>
            <div class="os-tabs-w">
              <div class="tab-content">
                <TabControls />
                <div class="tab-pane active" id="tab_overview">
                  <div class="el-tablo bigger">
                    <div class="label">Total Peers</div>
                    <div class="value">{n(peers.length)}</div>
                  </div>
                  <Line height={75} data={data} options={options} />
                </div>
              </div>
            </div>
          </Box>
        </div>
      </Col>
    )
  }
}
