import { createReducer } from "@reduxjs/toolkit";
import {
  createProductAction,
  deleteProductAction,
  editProductAction,
  createManyAction,
  createTotalAction,
  totalProductAction
} from "../actions/productsActions";

const manyState = {
  list: [{ many: 10000 }],
};

const initialState = {
  list: [{ id: 1, name: "Milk", quantity: 1, purchasePrice: 1000, sellingPrice: 1230 }],
};

const total = {
  list: [{
    quantity: initialState.list.reduce((prev, curr) => { return prev + curr.quantity }, 0),
    purchasePrice: initialState.list.reduce((prev, curr) => { return prev + curr.purchasePrice }, 0),
    sellingPrice: initialState.list.reduce((prev, curr) => { return prev + curr.sellingPrice }, 0)
  }]
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
      state.list = state.list.filter(item => item.id !== action.payload)
    })
    .addCase(editProductAction, (state, action) => {
      state.list = state.list.map(item => ((item.id !== action.payload.id) ? item : action.payload))
    })
    .addCase(totalProductAction, (state, action) => {
      total.list.map(item => item.quantity === null ? {
        quantity: state.list.reduce((prev, curr) => { return prev + curr.quantity }, 0),
        purchasePrice: state.list.reduce((prev, curr) => { return prev + curr.purchasePrice }, 0),
        sellingPrice: state.list.reduce((prev, curr) => { return prev + curr.sellingPrice }, 0)
      } : item
      )

    })
})


export const manyReducer = createReducer(manyState, (builder) => {
  builder
    .addCase(createManyAction, (state, action) => {
    })
})

export const totalReducer = createReducer(total, (builder) => {
  builder
    .addCase(createTotalAction, (state, action) => {
    })
})