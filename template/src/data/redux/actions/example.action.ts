import { ActionsTypes } from './actions.types'
import { type AnyAction } from 'redux'
interface examplePayload {
  name: string
}

export function setExample (payload: examplePayload): AnyAction {
  return {
    type: ActionsTypes.EXAMPLE,
    payload
  }
}
