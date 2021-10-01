import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = { pageSize: 0, currentPage: 0, viewArr: [] };

const slice = createSlice({
  name: "bikePagination",
  initialState,
  reducers: {
    gridSize: (state, action) => {
      state.pageSize = action.payload;
    },

    pageNumber: (state, action) => {
      state.currentPage = action.payload;
    },

    displayBike: (state, action) => {
      let count = state.currentPage;
      console.log("count", count, action.payload);
      let size = state.pageSize;
      console.log("size", size);
      //   let i = count * size;
      //   console.log("index", i);
      let arr = [];
      for (let i = count * size; i < count * size + size; i++) {
        if (action.payload[i]) {
          console.log("index", i);
          arr.push(action.payload[i]);
          console.log("[]", arr[i]);
        }
      }
      console.log("display Array:", arr);
      state.viewArr = arr;
      console.log("reducer view array:", state.viewArr);
    },
  },
});

// Actions
export const { gridSize, pageNumber, displayBike } = slice.actions;

// Selector

export const getPageNumber = (state) => state.ui.bikePagination.currentPage;
export const getPageSize = (state) => state.ui.bikePagination.pageSize;

export const getBikeView = (state) => state.ui.bikePagination.viewArr;

// Reducer
// export default slice.reducer;
