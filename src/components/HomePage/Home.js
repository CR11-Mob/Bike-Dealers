// import NavBar from "../NavBar/NavBar";
import "./Home.css";
import BudgetFilter from "./BasicFilter/BudgetFilter";
// import MileageFilter from "./BasicFilter/MileageFilter";
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

      <Grid item container justifyContent="center" xs={12}>
        <Grid item sm={6} style={{ backgroundColor: "moccasin" }}>
          <SelectBike />
        </Grid>
      </Grid>

      <Grid item container xs={12}>
        <Grid
          item
          container
          direction="row"
          xs={12}
          sm={4}
          md={4}
          style={{ backgroundColor: "paleturquoise" }}
        >
          <Grid item md={12}>
            <BudgetFilter />
          </Grid>
          {/* <Grid item md={12}>
            <MileageFilter />
          </Grid> */}
        </Grid>
        <Grid item xs={12} sm={8} md={8} style={{ backgroundColor: "pink" }}>
          <Bikes />
        </Grid>
      </Grid>
    </Grid>
  );
}
