import { createSlice } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

const initialState = {
  totalItems: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalItems++;
    },
    minusItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count--;
        state.totalItems--;
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalItems--;
    },
    clearItems(state) {
      state.items = [];
      state.totalItems = 0;
    },
  },
});

export const addItem = createAction('cart/addItem');
export const minusItem = createAction('cart/minusItem');
export const removeItem = createAction('cart/removeItem');
export const clearItems = createAction('cart/clearItems');

export default cartSlice.reducer;
