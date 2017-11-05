export const THEME_CHANGE_ACCENT = 'THEME_CHANGE_ACCENT'

export const themeChangeAccent = ({ foreground, background }) => ({
  type: THEME_CHANGE_ACCENT,
  payload: {
    foreground,
    background,
  },
})
