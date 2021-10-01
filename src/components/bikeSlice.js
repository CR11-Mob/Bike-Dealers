import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = { loadingStatus: true, allBikes: [], models: {} };

const slice = createSlice({
  name: "bikes",
  initialState,
  reducers: {
    loadAllBikes: (bikes, action) => {
      bikes.loadingStatus = false;
      bikes.allBikes = action.payload;
    },
  },
});

// Actions
export const { loadAllBikes } = slice.actions;

// Reducer
export default slice.reducer;

// Selector
export const getLoadingStatus = (state) => state.bikes.loadingStatus;
export const getAllBikes = (state) => state.bikes.allBikes;

// Reselector
export const getBrands = createSelector(getAllBikes, (allBikes) => {
  let brandArr = [];
  allBikes.map((bike) => {
    return !brandArr.includes(bike.brand)
      ? brandArr.push(bike.brand)
      : brandArr;
  });
  return brandArr;
});
