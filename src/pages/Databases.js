import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import DatabaseList from '../components/DatabaseList'

export default class Databases extends Component {
  render() {
    return (
      <div className="content-i">
        <Grid class="content-box">
          <Row>
            <Col sm={12}>
              <div class="element-wrapper">
                <h6 class="element-header">Databases</h6>
                <DatabaseList database={this.props.node.db} />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
