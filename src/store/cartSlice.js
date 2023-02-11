import data from './data';
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: data
    },
    reducers: {
        removeProduct(state, action) {
            state.data = state.data.filter(p => (p.id !== action.payload))
        },
        changeValue(state, action) {
            const findId = state.data.find(f => (f.id === action.payload.id))
            findId.count = action.payload.event
            findId.priceTotal = (findId.count + 1) * findId.price
        },

        increaseValue(state, action) {
            const findId = state.data.find(f => (f.id === action.payload))
            findId.count = findId.count + 1
            findId.priceTotal = (findId.count + 1) * findId.price
        },
        decreaseValue(state, action) {
            const findId = state.data.find(f => (f.id === action.payload))
            const newCount = findId.count - 1 > 1 ? findId.count - 1 : 1
            findId.count = newCount
            findId.priceTotal = (findId.count + 1) * findId.price

        }
    }
})

export const { removeProduct, changeValue, increaseValue, decreaseValue } = cartSlice.actions

export default cartSlice.reducer
