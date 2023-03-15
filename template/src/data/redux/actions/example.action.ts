import {ActionsTypes} from "./actions.types";
import {AnyAction} from "redux";
interface examplePayload{
    name: string
}

export function setExample(payload:examplePayload): AnyAction {
   return {
       type:ActionsTypes.EXAMPLE,
       payload
   }
}
