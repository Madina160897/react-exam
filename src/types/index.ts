export interface IProduct {
  id: number;
  name: string;
  quantity: number;
  purchasePrice: number;
  sellingPrice: number;
}

export interface ITotal {
  quantity: number;
  purchasePrice: number;
  sellingPrice: number;
}

export interface IMany {
  many: number;
}

export interface ISale {
  id: number;
  name: string;
  quantity: number;
  purchasePrice: number;
  sellingPrice: number;
}

export interface IPurchase {
  id: number;
  name: string;
  quantity: number;
  purchasePrice: number;
  sellingPrice: number;
}