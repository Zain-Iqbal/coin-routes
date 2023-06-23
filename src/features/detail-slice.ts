import {createSlice} from '@reduxjs/toolkit'

import {IDetailSlice} from "../interface";

const initialSate: IDetailSlice = {
    modalId: null
}

export const detailSlice = createSlice({
    name: 'detailSlice',
    initialState: initialSate,
    reducers: {
        setModalId: (state, action) => {
            const payload = !!action && !!action.payload ? action.payload : null
            state.modalId = payload
        },
    },

})

export const {
    setModalId
} = detailSlice.actions

export default detailSlice.reducer
