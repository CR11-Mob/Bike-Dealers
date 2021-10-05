import "./Home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadAllBikes, startLoading, stopLoading } from "./../bikeSlice"; // actions
import { getLoadingStatus } from "./../bikeSlice"; // selectors

import NavBar from "../NavBar/NavBar";
import SelectBike from "./SelectBike/SelectBike";

import { Box, Grid } from "@material-ui/core";
import { requestAllBikes } from "../../apis/bikeApi";

export default function Home() {
  const dispatch = useDispatch();
  const loading = useSelector(getLoadingStatus);

  useEffect(() => {
    if (!loading) {
      dispatch(startLoading());
    }
  }, []);

  useEffect(() => {
    // async function fetchData() {
    //   let res = await requestAllBikes();
    //   // console.log("--->", res.data);
    //   dispatch(loadAllBikes(res.data));
    // }
    // fetchData();
    if (loading) {
      setTimeout(() => {
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
              <NavBar />
              <h1 style={{ margin: 0 }}>HeRO</h1>
            </Box>
          </Grid>
          <Grid container item spacing={3} style={{ margin: "2rem 1rem" }}>
            <SelectBike />
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
