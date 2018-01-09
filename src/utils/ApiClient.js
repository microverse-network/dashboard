import { find } from 'lodash'
import mockProjects from './mocks/mockProjects'
import mockApiKeys from './mocks/mockApiKeys'
import mockUserRepositories from './mocks/mockUserRepositories'

export const loadProjects = () =>
  new Promise((resolve, reject) => {
    return resolve(mockProjects)
  })

export const fetchProject = _id =>
  new Promise((resolve, reject) => {
    return resolve(find(mockProjects, { _id }))
  })

export const loadApiKeys = () =>
  new Promise((resolve, reject) => {
    return resolve(mockApiKeys)
  })

export const fetchRepositories = () =>
  new Promise((resolve, reject) => {
    return resolve(mockUserRepositories)
  })
