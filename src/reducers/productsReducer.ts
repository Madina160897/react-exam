import { createReducer } from "@reduxjs/toolkit";
import { createProductAction, deleteProductAction, editProductAction, totalProductAction } from "../actions/productsActions";
const initialState = {
  list: [{ id: 1, name: "Milk", quantity: 1, purchasePrice: 1000, sellingPrice: 1230 }],
};

export const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createProductAction, (state, action) => {
      for (let i = 0; i < state.list.length; i++) {
        if ( action.payload.name === state.list[i].name) {
          state.list[i].quantity = action.payload.quantity
          state.list[i].purchasePrice = action.payload.purchasePrice
          state.list[i].sellingPrice = action.payload.sellingPrice
          return
        } else if ( action.payload.name !== state.list[i].name) {
          state.list.push({
            ...action.payload,
            id: state.list.length + Math.ceil(Math.random()),
          });
        }
      }
    })
    .addCase(deleteProductAction, (state, action) => {
      state.list = state.list.filter(item => item.id !== action.payload)
    })
    .addCase(editProductAction, (state, action) => {
      state.list = state.list.map(item => ((item.id !== action.payload.id) ? item : action.payload))
    })
});