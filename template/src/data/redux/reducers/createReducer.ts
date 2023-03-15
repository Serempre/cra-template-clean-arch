import {AnyAction} from "redux";

export function createReducer<T>(initialState:T,handler:{ [key: string]: any }){
    return (state = initialState, action: AnyAction) => {
        if(handler?.hasOwnProperty(action.type)){
            return handler[action.type](state, action)
        }
        return state;
    };

}
