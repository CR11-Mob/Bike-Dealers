import { useState, useEffect } from "react";

import {
  brands,
  models,
  detailsByModel,
  allBikesData,
} from "./../../bikesData";

// import NavBar from "../NavBar/NavBar";
import "./Home.css";
import BudgetFilter from "../BasicFilter/BudgetFilter";
import SelectBike from "./SelectBike/SelectBike";
import Bikes from "./BikeGid/Bikes";

import { styled, Grid, Paper } from "@material-ui/core";

export default function Home() {
  return (
    <Grid container direction="column">
      <Grid item xs={12} style={{ backgroundColor: "gray" }}>
        <div className="hero-container">
          <h1>HERO</h1>
        </div>
      </Grid>

      <Grid item container xs={12}>
        <Grid
          xs={12}
          sm={2}
          md={2}
          item
          style={{ backgroundColor: "paleturquoise" }}
        >
          <SelectBike />
        </Grid>
        <Grid item xs={12} sm={10} md={10} style={{ backgroundColor: "pink" }}>
          <Bikes />
        </Grid>
      </Grid>
    </Grid>
  );
}
