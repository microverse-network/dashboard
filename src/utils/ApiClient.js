import { find } from 'lodash'
import mockApps from './mocks/mockApps'
import mockApiKeys from './mocks/mockApiKeys'

export const loadApps = () =>
  new Promise((resolve, reject) => {
    return resolve(mockApps)
  })

export const fetchApp = _id =>
  new Promise((resolve, reject) => {
    return resolve(find(mockApps, { _id }))
  })

export const loadApiKeys = () =>
  new Promise((resolve, reject) => {
    return resolve(mockApiKeys)
  })
