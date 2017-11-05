import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromOracle } from 'store/selectors'
import { oracleAnswer } from 'store/actions'
import { sample } from 'lodash'

import { Oracle } from 'components'

const OracleContainer = props => <Oracle onAnswer={props.onAnswer} response={props.current.response} />

OracleContainer.propTypes = {
  availableResponses: PropTypes.array.isRequired,
  current: PropTypes.object.isRequired,
  onAnswer: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  availableResponses: fromOracle.getAvailableResponses(state),
  current: fromOracle.getCurrent(state),
})

const mergeProps = (stateProps, { dispatch }, ownProps) => ({
  ...stateProps,
  ...ownProps,
  onAnswer: () => dispatch(oracleAnswer({ response: sample(stateProps.availableResponses) })),
})

export default connect(mapStateToProps, null, mergeProps)(OracleContainer)
