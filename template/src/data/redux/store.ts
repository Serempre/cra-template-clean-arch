import { configureStore } from "@reduxjs/toolkit"
import reducers from './reducers/'
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"

const initialState = {}
let middleware: any[] = []
const persistConfig = {
    // Root?
    key: "root",
    storage: storage,
    blacklist: [""],
}
const persistReduce = persistReducer(persistConfig, reducers)
if (process.env.NODE_ENV === "development") {
    const reduxImmutableStateInvariant = require("redux-immutable-state-invariant").default()
    middleware = [...middleware, reduxImmutableStateInvariant, thunk]
}else{
    middleware = [...middleware, thunk]
}



const store = configureStore({
    reducer: persistReduce,
    middleware:middleware,
    preloadedState: initialState,
    devTools : process.env.NODE_ENV === "development"
})
const persistor = persistStore(store)

export default  {
    store,
    persistor
}
