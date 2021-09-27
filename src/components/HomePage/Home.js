import { useState, useEffect } from "react";

import "./Home.css";
import NavBar from "../NavBar/NavBar";
import SelectBike from "./SelectBike/SelectBike";
import Bikes from "./BikeGid/Bikes";

import { Box, Grid } from "@material-ui/core";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, margin: "0 1rem" }}>
      <Grid container spacing={6}>
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
        <Grid container item spacing={3}>
          <SelectBike />
        </Grid>
      </Grid>
    </Box>
  );
}
