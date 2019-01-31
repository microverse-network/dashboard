import React, { Component } from 'react'
import PropTypes from 'prop-types'

import HomeView from '../components/home'

export default class Home extends Component {
  static propTypes = {
    node: PropTypes.object,
    nodes: PropTypes.array,
    collections: PropTypes.object,
  }

  componentWillUnmount() {
    // clearInterval(this.dataChecker)
    // Object.keys(node.db.collections).map(key => {
    //   const collection = collections[key]
    //   collection.removeListener('change')
    // })
  }

  listenCollectionEvents(key, collection) {
    collection.on('change', (id, data) => console.log('collection changed', id))
  }

  render() {
    return <HomeView {...this.props} />
  }
}
