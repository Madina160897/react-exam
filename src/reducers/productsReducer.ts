import { createReducer } from "@reduxjs/toolkit";
import { createProductAction, deleteProductAction, editProductAction } from "../actions/productsActions";
import { createManyAction, deleteManyAction, editManyAction } from "../actions/manyActions";

const initialState = {
  list: [{ id: 1, name: "Milk", quantity: 1, purchasePrice: 1000, sellingPrice: 1230 }],
};

const manyState = {
  list: [{ id: 1, many: 10000 }],
};

const sellingPrice = {
  price: [{}]
}

export const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createProductAction, (state, action) => {
      if (state.list.find(item => item.name.toLowerCase() === action.payload.name.toLowerCase())) {
        state.list = state.list.map((item) => item.name.toLowerCase() === action.payload.name.toLowerCase() ? {
          id: item.id,
          name: item.name,
          purchasePrice: action.payload.purchasePrice,
          sellingPrice: action.payload.sellingPrice,
          quantity: item.quantity + action.payload.quantity,
        }
          : item
        )
      } else {

        state.list.push({
          ...action.payload,
          id: state.list.length + Math.ceil(Math.random()),
        })
      }
    })
    .addCase(deleteProductAction, (state, action) => {
      const pri = state.list.find(item => item.id !== action.payload)
      // sellingPrice.price.push(pri?.sellingPrice)
      state.list = state.list.filter(item => item.id !== action.payload)
    })
    .addCase(editProductAction, (state, action) => {
      state.list = state.list.map(item => ((item.id !== action.payload.id) ? item : action.payload))
    })
  })


  export const manyReducer = createReducer(manyState, (builder) => {
    builder
      .addCase(createManyAction, (state, action) => {
        state.list.push({
          ...action.payload,
          id: state.list.length + Math.ceil(Math.random()),
        })
      })
      .addCase(deleteManyAction, (state, action) => {
        state.list = state.list.filter(item => item.id !== action.payload)
      })
      .addCase(editManyAction, (state, action) => {
        state.list = state.list.map(item => ((item.id !== action.payload.id) ? item : action.payload))
      })
  });