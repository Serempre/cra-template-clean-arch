import {createReducer} from "./createReducer";
import {ActionsTypes} from "../actions/actions.types";
import {AnyAction} from "redux";
export const testReducer = createReducer({name:'I´m an example'},{
    [ActionsTypes.EXAMPLE](state:{ [key: string]: any }, action: AnyAction){
        const  {payload} = action
        return {
            ...state,
            ...payload
        }
    }
})
