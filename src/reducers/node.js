const node = (state = {}, action) => {
  switch (action.type) {
    case 'AGENT_NODE_REGISTERED': {
      const node = action.payload
      state = node
      break
    }
  }
  return state
}

export default node
