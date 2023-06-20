import { CartState } from "./useCart";

export const selectCartList = (state: CartState) => state.list;

export const selectCartIsEmpty = (state: CartState) => state.list.length === 0;

export const selectTotalCartCost = (state: CartState) =>
  state.list.reduce((acc, item) => acc + (item.quantity * item.product.cost), 0);

export const selectTotalCartItems = (state: CartState) =>
  state.list.reduce((acc, item) => acc + item.quantity, 0);
