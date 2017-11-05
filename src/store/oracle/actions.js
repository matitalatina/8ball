export const ORACLE_ANSWER = 'ORACLE_ANSWER'

export const oracleAnswer = ({ response }) => ({
  type: ORACLE_ANSWER,
  payload: {
    response,
  },
})
