import React, { Component } from 'react'

import CenteredContainer from 'components/CenteredContainer'

import { VictoryBar, VictoryChart, VictoryTheme } from 'victory'
import { Select, Button, Input } from 'semantic-ui-react'

import { random } from 'lodash'

const Data = ({
  quarter,
  earnings = Math.floor((Math.random() + 1) * 10000),
}) => ({
  quarter,
  earnings,
  fill:
    earnings > 17500
      ? 'red'
      : earnings <= 17500 && earnings > 12500 ? 'orange' : 'gold',
})

const easings = [
  'back',
  'backIn',
  'backOut',
  'backInOut',
  'bounce',
  'bounceIn',
  'bounceOut',
  'bounceInOut',
  'circle',
  'circleIn',
  'circleOut',
  'circleInOut',
  'linear',
  'linearIn',
  'linearOut',
  'linearInOut',
  'cubic',
  'cubicIn',
  'cubicOut',
  'cubicInOut',
  'elastic',
  'elasticIn',
  'elasticOut',
  'elasticInOut',
  'exp',
  'expIn',
  'expOut',
  'expInOut',
  'poly',
  'polyIn',
  'polyOut',
  'polyInOut',
  'quad',
  'quadIn',
  'quadOut',
  'quadInOut',
  'sin',
  'sinIn',
  'sinOut',
  'sinInOut',
]

export default class Home extends Component {
  state = {
    data: [],
    easing: 'quadInOut',
    duration: 300,
  }

  addData = () => {
    this.setState(state => ({
      data: state.data.concat([Data({ quarter: state.data.length + 1 })]),
    }))
  }

  randomizeData = () => {
    this.setState(state => ({
      data: state.data.map(d => Data({ quarter: d.quarter })),
    }))
  }

  onEasingChange = (e, { value }) =>
    this.setState({
      easing: value,
      data: this.state.data.map(d => Data({ ...d })),
    })

  onInputChange = (e, { value }) =>
    this.setState(state => ({
      duration: parseInt(value, 10),
    }))

  render() {
    const { data, easing, duration } = this.state
    return (
      <CenteredContainer>
        <div style={{ width: 960, textAlign: 'center' }}>
          <label>Select easing</label>
          <Select
            value={this.state.easing}
            onChange={this.onEasingChange}
            options={easings.map(easing => ({
              key: easing,
              text: easing,
              value: easing,
            }))}
          />
          <Input
            label="Duration (ms)"
            value={duration}
            onChange={this.onInputChange}
          />
          <Button.Group>
            <Button onClick={this.addData}>Add data</Button>
            <Button onClick={this.randomizeData}>Randomize data</Button>
          </Button.Group>
          <VictoryChart
            key={easing}
            theme={VictoryTheme.material}
            domainPadding={20}
            animate={{ duration, easing }}>
            <VictoryBar data={data} x="quarter" y="earnings" />
          </VictoryChart>
        </div>
      </CenteredContainer>
    )
  }
}
