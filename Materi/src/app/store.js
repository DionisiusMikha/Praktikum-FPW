import {configureStore} from "@reduxjs/toolkit"
import mhsReducer from "./mhsSlice"
import routeReducer from "./routeSlice"

//store digunakan untuk menampung semua slice redux
const store = configureStore({
    reducer:{
        route: routeReducer,
        mhs: mhsReducer
    },
})
export default store