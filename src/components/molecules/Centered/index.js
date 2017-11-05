import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: ${palette.foreground}
`

const Centered = ({ children }) => {
  return (<Wrapper>{children}</Wrapper>)
}

Centered.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Centered
