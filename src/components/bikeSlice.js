import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  loadingStatus: true,
  allBikes: [],
  brandsFilteredData: {},
  modelsFilteredData: {},
};

const slice = createSlice({
  name: "bikes",
  initialState,
  reducers: {
    startLoading: (bikes) => {
      bikes.loadingStatus = true;
    },
    loadAllBikes: (bikes, action) => {
      bikes.allBikes = action.payload;
    },
    stopLoading: (bikes) => {
      bikes.loadingStatus = false;
    },
    setBrandsData: (bikes, action) => {
      let brandsArr = action.payload;
      let obj = {};
      brandsArr.map((brandName) => {
        return (obj[brandName] = bikes.allBikes.filter(
          (bike) => bike.brand === brandName
        ));
      });
      bikes.brandsFilteredData = obj;
    },
  },
});

// Actions
export const { loadAllBikes, startLoading, stopLoading, setBrandsData } =
  slice.actions;

// Reducer
export default slice.reducer;

// Selector
export const getLoadingStatus = (state) => state.bikes.loadingStatus;
export const getAllBikes = (state) => state.bikes.allBikes;
export const getBrandsData = (state) => state.bikes.brandsFilteredData;

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
