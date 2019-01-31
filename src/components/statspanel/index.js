import React, { Component } from 'react'
import PropTypes from 'prop-types'
import numeral from 'numeral'
import { Grid, Row, Col } from 'react-bootstrap'
import Box from '../Box'
import Stat from '../Stat'

import aggregatePeers from '../../helpers/aggregatepeers'

export default class StatsPanel extends Component {
  static propTypes = {
    nodes: PropTypes.array.isRequired,
    collections: PropTypes.object.isRequired,
    workers: PropTypes.array,
  }

  render() {
    const { nodes, collections } = this.props
    const { all } = aggregatePeers(nodes)

    const t2MicroMonthly = 8.468
    const clusterValue = all.cpu * t2MicroMonthly

    return (
      <div class="element-wrapper">
        <h6 class="element-header">Project Summary</h6>
        <Row>
          <Col sm={12}>
            <Box>
              <Grid>
                <Row>
                  <Col sm={3}>
                    <Stat centered label="Workers" value={nodes.length} />
                  </Col>
                  <Col sm={3}>
                    <Stat centered label="Databases" value={nodes.length} />
                  </Col>
                  <Col sm={3}>
                    <Stat
                      centered
                      label="Collections"
                      value={collections.collections.length}
                    />
                  </Col>
                  <Col sm={3}>
                    <Stat
                      centered
                      highlight
                      label="Objects Written"
                      value={numeral(collections.objectCount).format('0a')}
                    />
                  </Col>
                </Row>
              </Grid>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div class="element-balances">
              <div class="balance hidden-mobile">
                <div class="balance-title">Estimated Savings</div>
                <div class="balance-value">
                  <span>{numeral(clusterValue * 0.88).format('$0,0')}/mo</span>
                </div>
                <div class="balance-link">
                  <a class="btn btn-link btn-underlined" href="#">
                    <span>How is this calculated?</span>
                    <i class="os-icon os-icon-arrow-right4" />
                  </a>
                </div>
              </div>
              <div class="balance">
                <div class="balance-title">Estimated Cluster Value</div>
                <div class="balance-value">
                  <span>{numeral(clusterValue).format('$0,0')}/mo</span>
                  <span class="trending trending-down-basic">
                    <span>%88</span>
                    <i class="os-icon os-icon-arrow-2-up" />
                  </span>
                </div>
                <div class="balance-link">
                  <a class="btn btn-link btn-underlined" href="#">
                    <span>How is this calculated?</span>
                    <i class="os-icon os-icon-arrow-right4" />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
