import { createSlice } from "@reduxjs/toolkit";

const initialState = { path: "", data: {} };

const slice = createSlice({
  name: "route",
  initialState,
  reducers: {
    linkTo: (state, action) => {
      state.path = action.payload.path;
      state.data = action.payload.bikeData;
    },
  },
});

// Action
export const { linkTo } = slice.actions;

// Reducer
export default slice.reducer;

// Selector
export const getPath = (state) => state.routes.path;
export const getSelectedBikeData = (state) => state.routes.data;
