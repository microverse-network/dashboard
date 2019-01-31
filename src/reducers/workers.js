export default (state = [], action) => {
  switch (action.type) {
    case 'WORKER_REMOVED':
    case 'WORKER_ADDED':
      state = [...action.payload.data]
      break
  }
  return state
}
