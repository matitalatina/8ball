import { isEmpty } from 'lodash'
import theme from '../../components/themes/default'

export const initialState = theme

export const get = (state = initialState) => isEmpty(state) ? initialState : state
export const getPalette = (state = initialState) => get(state).palette
export const getAvailableAccents = (state = initialState) => get(state).availableAccents
