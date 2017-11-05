import { initialState, getCurrent } from './selectors'
import { ORACLE_ANSWER } from './actions'

export default (state = initialState, { type, payload = {} }) => {
  const current = getCurrent(state)
  switch (type) {
    case ORACLE_ANSWER:
      return {
        ...state,
        current: {
          ...current,
          response: payload.response,
        },
      }
    default:
      return state
  }
}
