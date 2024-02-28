import { createSlice } from '@reduxjs/toolkit'


export const pageActiveSlice = createSlice({
    name: 'pageActive',
    initialState: "dashboard",
    reducers: {
        handlePageActive(state, action) {
           return state = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { handlePageActive } = pageActiveSlice.actions

export default pageActiveSlice.reducer