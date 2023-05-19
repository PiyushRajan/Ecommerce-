import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slice/productSlice";

export const store = configureStore({
  reducer: {
    Products: productsReducer,
  },
});
