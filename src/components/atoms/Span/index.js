import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Span = styled.span`
  font-family: ${font('primary')};
  color: ${props => props.reverse ? palette('background', 0) : palette('foreground', 0)};
`

Span.propTypes = {
  reverse: PropTypes.bool,
}

export default Span
