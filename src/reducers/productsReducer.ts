import { createReducer } from "@reduxjs/toolkit";
import { listenerCancelled } from "@reduxjs/toolkit/dist/listenerMiddleware/exceptions";
import {
  createProductAction,
  deleteProductAction,
  editProductAction,
  saleProductAction
} from "../actions/productsActions";

const initialState = {
  list: [{
    id: 1,
    name: "Milk",
    quantity: 1,
    purchasePrice: 1000,
    sellingPrice: 1230
  }],
  total: [{
    quantity: 1,
    purchasePrice: 1000,
    sellingPrice: 1230
  }],
  many: [{
    manyState: 10000
  }],
  histiryList: [""]
};

export const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createProductAction, (state, action) => {
      if (state.list.find(item => item.name.toLowerCase() === action.payload.name.toLowerCase())) {
        state.list = state.list.map((item) => item.name.toLowerCase() === action.payload.name.toLowerCase() ? {
          id: item.id,
          name: item.name,
          purchasePrice: action.payload.purchasePrice * action.payload.quantity,
          sellingPrice: action.payload.sellingPrice * action.payload.quantity,
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
      state.total[0].quantity = state.total[0].quantity + action.payload.quantity
      state.total[0].purchasePrice = state.total[0].purchasePrice + action.payload.purchasePrice
      state.total[0].sellingPrice = state.total[0].sellingPrice + action.payload.sellingPrice
      state.many[0].manyState = (state.many[0].manyState - state.total[0].purchasePrice) + state.total[0].sellingPrice
      state.histiryList.push(`В ${new Date().toLocaleTimeString()} - добавлен новый товар "${action.payload.name}", в количестве ${action.payload.quantity} шт., закупочная цена: ${action.payload.purchasePrice} тг., цена продажи: ${action.payload.sellingPrice} тг.`)
    })
    .addCase(deleteProductAction, (state, action) => {
      state.list = state.list.filter(
        (item) => item.id !== action.payload.id
      );
      state.total[0].quantity = state.total[0].quantity - action.payload.quantity
      state.total[0].purchasePrice = state.total[0].purchasePrice - action.payload.purchasePrice
      state.total[0].sellingPrice = state.total[0].sellingPrice - action.payload.sellingPrice
      state.many[0].manyState = (state.many[0].manyState - state.total[0].purchasePrice) + state.total[0].sellingPrice
      state.histiryList.push(`В ${new Date().toLocaleTimeString()} - удален товар "${action.payload.name}", в количестве ${action.payload.quantity} шт.`)
    })
    .addCase(editProductAction, (state, action) => {
      state.list = state.list.map(item => ((item.id !== action.payload.id) ? item : action.payload))
    })
    .addCase(saleProductAction, (state, action) => {
      state.list.map((item) => {
        if(item.name.toLowerCase() === action.payload.name.toLowerCase()){
          if(item.quantity < action.payload.quantity){
            console.log(`Товара "${action.payload.name}" в количестве ${action.payload.quantity} шт. нет`)
          }else{
            item.quantity = item.quantity - action.payload.quantity
            state.histiryList.push(`В ${new Date().toLocaleTimeString()} - продан товар "${action.payload.name}", в количестве ${action.payload.quantity} шт., цена продажи за ед.: ${item.sellingPrice} тг.`)
          }
        }
      });
    })
})
