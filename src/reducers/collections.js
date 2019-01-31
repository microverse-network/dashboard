const initialState = { objectCount: 0, collections: [] }

const collections = (state = initialState, action) => {
  switch (action.type) {
    case 'COLLECTIONS_FETCHED':
      const collections = action.payload
      state = { ...state, collections }
      break
    case 'OBJECT_COUNT_FETCHED':
      const objectCount = action.payload
      state = { ...state, objectCount }
      break
  }
  return state
}

export default collections
