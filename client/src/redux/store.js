import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/products';
import cartReducer from './slices/cart';
import { authReducer } from './slices/auth';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
