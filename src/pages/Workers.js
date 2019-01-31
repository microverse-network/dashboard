/* global io, __microverse */
import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import WorkerList from '../components/WorkerList'

const { bundles, socketPort } = __microverse

export default class Workers extends Component {
  state = {
    bundles,
  }

  componentDidMount() {
    if (socketPort) {
      this.socket = io(`http://${window.location.hostname}:${socketPort}`)
      this.socket.on('change:bundles', bundles => {
        this.setState({ bundles })
      })
    }
  }

  render() {
    return (
      <div className="content-i">
        <Grid class="content-box">
          <Row>
            <Col sm={12}>
              <div class="element-wrapper">
                <h6 class="element-header">Workers</h6>
                <WorkerList bundles={this.state.bundles} />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
