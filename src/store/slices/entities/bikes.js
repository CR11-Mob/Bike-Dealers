import allBikesData from "../../../bikesData";

import { createSlice } from "@reduxjs/toolkit";

const initialState = { modelNames: [], selectedBikes: [] };

const slice = createSlice({
  name: "bikes",
  initialState,
  reducers: {
    getAllBikes: (bikes, action) => {
      bikes.selectedBikes = allBikesData;
      bikes.modelNames = [];
    },

    filterByBrand: (bikes, action) => {
      bikes.selectedBikes = allBikesData.filter(
        (bike) => bike.brand === action.payload.brand
      );

      const arr = () => {
        let modelArr = [];
        bikes.selectedBikes.map((bike) => {
          return modelArr.push(bike.model);
        });
        return modelArr;
      };

      bikes.modelNames = arr();
    },

    filterByModel: (bikes, action) => {
      bikes.selectedBikes = allBikesData.filter(
        (bike) => bike.model === action.payload.model
      );
    },
  },
});

// Actions
export const { getAllBikes, filterByBrand, filterByModel } = slice.actions;

// Selectors
export const getBrands = () => {
  let brandArr = [];
  allBikesData.map((bike) => {
    return !brandArr.includes(bike.brand)
      ? brandArr.push(bike.brand)
      : brandArr;
  });
  return brandArr;
};

export const getModels = (state) => state.entities.bikes.modelNames;

export const getBikeDetails = (state) => state.entities.bikes.selectedBikes;

// Reducer
// export default slice.reducer;
