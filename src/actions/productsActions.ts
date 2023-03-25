import { createAction } from "@reduxjs/toolkit";

export interface IProductAction {
  name: string;
  quantity: number;
  purchasePrice: number;
  sellingPrice: number;
}
export interface IEditProductAction {
  id: number;
  name: string;
  quantity: number;
  purchasePrice: number;
  sellingPrice: number;
}

export const createProductAction = createAction<IProductAction>("PRODUCTS_CREATE");
export const deleteProductAction = createAction("PRODUCTS_DELETE");
export const editProductAction = createAction<IEditProductAction>("PRODUCTS_EDIT");
export const totalProductAction = createAction("PRODUCTS_TOTAL");
