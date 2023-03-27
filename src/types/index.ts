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
  manyState: number;
}