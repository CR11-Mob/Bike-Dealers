import "./Home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { startLoading, stopLoading, setBrandsData } from "./../bikeSlice"; // actions
import { getLoadingStatus } from "./../bikeSlice"; // selectors

import NavBar from "../NavBar/NavBar";
import SelectBike from "./SelectBike/SelectBike";

import { Box, Grid } from "@material-ui/core";

export default function Home() {
  const dispatch = useDispatch();
  const loading = useSelector(getLoadingStatus);

  useEffect(() => {
    if (!loading) {
      dispatch(startLoading());
    }
  }, []);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        dispatch(setBrandsData());
        dispatch(stopLoading());
      }, 1000);
    }
  }, [loading]);

  useEffect(() => {
    console.log("loading Status:", loading);
  }, [loading]);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>LOADING...</h1>;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {!loading && (
        <Grid container>
          <Grid item xs={12} style={{ backgroundColor: "pink" }}>
            <Box
              sx={{
                minHeight: "100vh",
                backgroundColor: "gray",
                textAlign: "center",
              }}
            >
              {/* <NavBar /> */}
              <h1 style={{ margin: 0 }}>HERO</h1>
            </Box>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            style={{ margin: "2rem" }}
          >
            <SelectBike />
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
