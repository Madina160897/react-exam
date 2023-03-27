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

export interface IDeleteProductAction{
  id: number;
  name: string;
  quantity: number;
  purchasePrice: number;
  sellingPrice: number;
}

export interface ISaleProductAction{
  name: string;
  quantity: number;
}

export const createProductAction = createAction<IProductAction>("PRODUCTS_CREATE");
export const deleteProductAction = createAction <IDeleteProductAction> ("PRODUCTS_DELETE");
export const editProductAction = createAction<IEditProductAction>("PRODUCTS_EDIT");
export const saleProductAction = createAction<ISaleProductAction>("DSALE_PRODUCT");
