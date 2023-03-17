import { createReducer } from './createReducer'
import { ActionsTypes } from '../actions/actions.types'
import { type AnyAction } from 'redux'
export const testReducer = createReducer({ name: 'I´m an example' }, {
  [ActionsTypes.EXAMPLE] (state: Record<string, any>, action: AnyAction) {
    const { payload } = action
    return {
      ...state,
      ...payload
    }
  }
})
