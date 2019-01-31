import React, { Component } from 'react'
import async from 'async'
import ObjectViewer from 'react-json-view'

export default class DatabaseList extends Component {
  static defaultProps = {
    database: {},
  }

  state = {
    db: {},
  }

  listenCollectionEvents(key, collection) {
    let { db } = this.state
    collection.on('change', (id, data) => {
      if (!db[key]) {
        db[key] = []
      }

      collection.find({}).then(result => {
        db[key] = result
        this.setState({ db })
      })
    })
  }

  componentWillUnmount() {
    const { database: { collections } } = this.props
    Object.keys(collections).map(key => {
      const collection = collections[key]
      collection.removeListener('change')
    })
  }

  componentDidMount() {
    const { database } = this.props
    let newdb = {}
    async.parallel(
      Object.keys(database.collections).map(key => {
        return next => {
          database
            .get(key)
            .find({})
            .then(data => {
              return next(null, { [key]: data })
            })
        }
      }),
      (err, collections) => {
        collections.forEach(collection => {
          newdb = Object.assign(newdb, collection)
        })
        this.setState({ db: newdb })
        Object.keys(database.collections).map(key => {
          this.listenCollectionEvents(key, database.collections[key])
        })
      }
    )
  }

  render() {
    return (
      <ObjectViewer
        src={this.state.db}
        name="hello-world"
        collapseStringsAfterLength={20}
        collapsed={2}
      />
    )
  }
}
