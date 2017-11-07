import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromTheme } from 'store/selectors'
import { ThemeProvider } from 'styled-components'

const ThemeProviderContainer = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

ThemeProviderContainer.propTypes = {
  children: PropTypes.any.isRequired,
  theme: PropTypes.object,
}

const mapStateToProps = state => ({
  theme: fromTheme.get(state),
})

export default connect(mapStateToProps, null, null)(ThemeProviderContainer)
