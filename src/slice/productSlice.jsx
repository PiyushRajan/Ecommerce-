import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filterProducts: [],
};
export const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
    },
    filterByRating: (state, action) => {
      const { rating } = action.payload;
      console.log("rating", rating);
      state.filterProducts = state.products.filter(
        // (product) => product.rating >= rating
        (product) => rating.includes(Math.floor(product.rating))
      );
    },
    sorting: (state, action) => {
      const targetArray = state.filterProducts.length
        ? state.filterProducts
        : state.products;
      if (action.payload == "low_first") {
        state.products = targetArray.sort((a, b) => a?.price - b?.price);
      } else {
        state.products = targetArray.sort((a, b) => b?.price - a?.price);
      }
    },
  },
});

export const { setProduct, filterByRating, sorting } = productSlice.actions;

export default productSlice.reducer;
