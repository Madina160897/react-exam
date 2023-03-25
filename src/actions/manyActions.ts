import { createAction } from "@reduxjs/toolkit";

export interface IManyAction {
  many: number;
}
export interface IEditManyAction {
  id: number;
  many: number;
}

export const createManyAction = createAction<IManyAction>("MANY_CREATE");
export const deleteManyAction = createAction("MANY_DELETE");
export const editManyAction = createAction<IEditManyAction>("MANY_EDIT");
export const totalManyAction = createAction("MANY_TOTAL");
