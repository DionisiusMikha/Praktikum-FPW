import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    route:"list",
    updateId : -1
}

export const routeSlice = createSlice({
    name:"route",
    initialState,
    reducers:{
        setRoute : (state, action) => {
            state.route = action.payload
        },
        setUpdateId : (state, action) => {
            state.updateId = action.payload
        }
    }
})

export const {setRoute, setUpdateId} = routeSlice.actions

export default routeSlice.reducer