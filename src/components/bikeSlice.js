import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  loadingStatus: false,
  allBikes: [],
  allDataByBrands: {},
  allDataByModels: {},
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

    setBrandsData: (bikes) => {
      let obj = {};
      bikes.allBikes.map((brandName) => {
        return (obj[brandName.brand] = bikes.allBikes.filter(
          (bike) => bike.brand === brandName.brand
        ));
      });
      bikes.allDataByBrands = obj;
    },

    setModelsData: (bikes) => {
      let obj = {};
      bikes.allBikes.map((bike) => {
        return (obj[`${bike.model}`] = bike);
      });
      bikes.allDataByModels = obj;
    },
  },
});

// Actions
export const {
  loadAllBikes,
  startLoading,
  stopLoading,
  setBrandsData,
  setModelsData,
} = slice.actions;

// Reducer
export default slice.reducer;

// Selector
export const getLoadingStatus = (state) => state.bikes.loadingStatus;
export const getAllBikes = (state) => state.bikes.allBikes;
export const getBrandsData = (state) => state.bikes.allDataByBrands;
export const getAllModelsData = (state) => state.bikes.allDataByModels;

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
