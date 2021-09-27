import { useState, useEffect } from "react";

import "./Home.css";
import NavBar from "../NavBar/NavBar";
import SelectBike from "./SelectBike/SelectBike";
import Bikes from "./BikeGid/Bikes";

import { Grid, Container } from "@material-ui/core";

export default function Home() {
  return (
    <Grid container>
      <Grid
        item
        container
        // xs={10}
        // sm={10}
        // md={12}
        columns={{ xs: 10, sm: 10, md: 12 }}
      >
        <Grid item xs={10} sm={10} md={12}>
          <Bikes />
        </Grid>
        <Grid
          xs={2}
          sm={2}
          md={4}
          item
          style={{ backgroundColor: "paleturquoise" }}
        >
          <SelectBike />
        </Grid>
        <Grid item xs={8} sm={8} md={8} style={{ backgroundColor: "pink" }}>
          <Bikes />
        </Grid>
      </Grid>
    </Grid>
  );
}
