import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row } from 'react-bootstrap'
import PeersChart from '../peerschart'
import DatabasesChart from '../databaseschart'
import PeersPanel from '../peerspanel'
import StatsPanel from '../statspanel'
import TeamMembersPanel from '../teammemberspanel'
import RecentDeploymentsPanel from '../recentdeploymentspanel'

import members from '../teammemberspanel/memberdata'

export default class HomeView extends Component {
  static propTypes = {
    nodes: PropTypes.array.isRequired,
  }

  render() {
    const { nodes } = this.props
    return (
      <div className="content-i">
        <Grid class="content-box">
          <StatsPanel {...this.props} />
          <Row>
            <PeersChart peers={nodes} />
            <DatabasesChart />
          </Row>
          <PeersPanel peers={nodes} />
        </Grid>
        <Grid class="content-panel">
          <RecentDeploymentsPanel />
          <TeamMembersPanel members={members} />
        </Grid>
      </div>
    )
  }
}
