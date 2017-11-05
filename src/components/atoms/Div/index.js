import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Div = styled.div`
  font-family: ${font('primary')};
  color: ${props => props.reverse ? palette('background', 0) : palette('foreground', 0)};
`

Div.propTypes = {
  reverse: PropTypes.bool,
}

export default Div
