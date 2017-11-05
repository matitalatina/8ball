import React from 'react'
import PropTypes from 'prop-types'
import { Div, Wow, Spacer, Button } from 'components'

const Wrapper = Div.extend`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`

const Oracle = ({ response, onAnswer }) => {
  return (
    <Wrapper>
      <Wow>{response}</Wow>
      <Spacer size={5} />
      <Button onClick={onAnswer}>Invoca l'oracolo</Button>
    </Wrapper>
  )
}

Oracle.propTypes = {
  response: PropTypes.string,
  onAnswer: PropTypes.func.isRequired,
}

Oracle.defaultProps = {
  response: '',
}

export default Oracle
