import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: false,
    id: 1,
    image: ''
}

export const HallSlice = createSlice({
    name: 'HallSlice',
    initialState,
    reducers: {
        getHall: (state, action) => {
            state.value = action.payload
        },
        getHallId: (state, action) => {
            state.id = action.payload
        },
        getImage: (state, action) => {
            state.image = action.payload
        }
    }
})

export const {getImage,getHallId, getHall} = HallSlice.actions

export default HallSlice.reducer