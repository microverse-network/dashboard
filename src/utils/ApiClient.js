import { find } from 'lodash'
import mockProjects from './mocks/mockProjects'
import mockUserRepositories from './mocks/mockUserRepositories'
import mockPeers from './mocks/mockPeers'
import mockDataConnections from './mocks/mockDataConnections'

export const loadProjects = () =>
  new Promise((resolve, reject) => {
    return resolve(mockProjects)
  })

export const fetchProject = _id =>
  new Promise((resolve, reject) => {
    return resolve(find(mockProjects, { _id }))
  })

export const fetchRepositories = () =>
  new Promise((resolve, reject) => {
    return resolve(mockUserRepositories)
  })

export const fetchPeers = () =>
  new Promise((resolve, reject) => {
    return resolve(mockPeers)
  })

export const fetchDataConnections = () =>
  new Promise((resolve, reject) => {
    return resolve(mockDataConnections)
  })
