import PropTypes from 'prop-types'
import styled from 'styled-components'

const space = ({ size, theme }) => `${theme.sizes.spacer * size}px`
const Spacer = styled.div`
  height: ${space};
  width: ${space};
`

Spacer.propTypes = {
  size: PropTypes.number,
}

Spacer.defaultProps = {
  size: 1,
}

export default Spacer
