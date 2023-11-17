import {configureStore} from "@reduxjs/toolkit"
import wishlistSlice from "./WishlistSlice"

const store = configureStore({
    reducer:{
        wishlist: wishlistSlice,
    },
})

export default store