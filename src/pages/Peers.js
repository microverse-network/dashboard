import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-bootstrap'

import PeerList from '../components/PeerList'

export default class Peers extends Component {
  static propTypes = {
    node: PropTypes.object,
  }

  render() {
    return (
      <div className="content-i">
        <Grid class="content-box">
          <Row>
            <Col sm={12}>
              <div class="element-wrapper">
                <h6 class="element-header">Peers</h6>
                <PeerList node={this.props.node} />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
