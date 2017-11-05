import PropTypes from 'prop-types'
import { font, palette, key } from 'styled-theme'
import { Span } from 'components'

const Wow = Span.extend`
  font-family: ${font('primary')};
  color: ${props => props.reverse ? palette('background', 0) : palette('foreground', 0)};
  font-size: ${key('fonts.sizes.big')};
`

Wow.propTypes = {
  reverse: PropTypes.bool,
}

export default Wow
