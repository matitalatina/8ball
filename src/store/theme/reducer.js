import { initialState, getPalette } from './selectors'
import { THEME_CHANGE_ACCENT } from './actions'

export default (state = initialState, { type, payload = {} }) => {
  const palette = getPalette(state)
  switch (type) {
    case THEME_CHANGE_ACCENT:
      return {
        ...state,
        palette: {
          ...palette,
          foreground: payload.foreground,
          background: payload.background,
        },
      }
    default:
      return state
  }
}
