import { type AnyAction } from 'redux'

export function createReducer<T> (initialState: T, handler: Record<string, any>) {
  return (state = initialState, action: AnyAction) => {
    // eslint-disable-next-line no-prototype-builtins
    if (handler?.hasOwnProperty(action.type)) {
      return handler[action.type](state, action)
    }
    return state
  }
}
