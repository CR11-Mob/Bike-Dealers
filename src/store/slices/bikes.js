import allBikesData from "./../../bikesData";

import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = { brands: [], models: [], types: [] };

const slice = createSlice({
  name: "bikes",
  initialState,
  reducers: {
    filterBikesByBrand: (bikes, action) => {
      bikes.brands = allBikesData.filter(
        (bike) => bike.brand === action.payload.brand
      );
    },
  },
});

// Actions
export const { filterBikesByBrand } = slice.actions;

// Memoized Selector
export const getBikeBrands = createSelector(
  (state) => state.bikes,
  (bikes) => {
    let brandArr = [];
    allBikesData.map((bike) => {
      return !brandArr.includes(bike.brand)
        ? brandArr.push(bike.brand)
        : brandArr;
    });
    return brandArr;
  }
);

// Reducer
export default slice.reducer;
