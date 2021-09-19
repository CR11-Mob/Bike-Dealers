import { useState, useEffect } from "react";

import { brands, models, bikeDetails, allBikesData } from "./../../bikesData";

// import NavBar from "../NavBar/NavBar";
import "./Home.css";
import BudgetFilter from "./BasicFilter/BudgetFilter";
// import MileageFilter from "./BasicFilter/MileageFilter";
import SelectBike from "./SelectBike/SelectBike";
import Bikes from "./BikeGid/Bikes";

import { styled, Grid, Paper } from "@material-ui/core";

export default function Home() {
  const [budgetState, setBudget] = useState(null);

  const [brandState, setBrand] = useState("All");

  const [modelState, setModel] = useState("");

  const [selectedBikeState, setSelectedBike] = useState([]);

  const selectedBikes = () => {
    if (brandState !== "All") {
      let arr = [];
      for (let i = 0; i < models[brandState].length; i++) {
        let modelName = models[brandState][i];
        let details = bikeDetails[modelName];
        console.log("models name:", modelName);
        console.log(`${modelName} details:`, details);
        arr.push(details);
      }
      setSelectedBike(arr);
    }
  };

  useEffect(() => {
    selectedBikes();
  }, [brandState]);

  return (
    <Grid container direction="column">
      <Grid item xs={12} style={{ backgroundColor: "gray" }}>
        <div className="hero-container">
          <h1>HERO</h1>
        </div>
      </Grid>

      <Grid item container justifyContent="center" xs={12}>
        <Grid item sm={6} style={{ backgroundColor: "moccasin" }}>
          <SelectBike
            brandState={brandState}
            setBrand={setBrand}
            modelState={modelState}
            setModel={setModel}
          />
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
            <BudgetFilter budgetState={budgetState} setBudget={setBudget} />
          </Grid>
          {/* <Grid item md={12}>
            <MileageFilter />
          </Grid> */}
        </Grid>
        <Grid item xs={12} sm={8} md={8} style={{ backgroundColor: "pink" }}>
          <Bikes
            brandState={brandState}
            modelState={modelState}
            budgetState={budgetState}
            selectedBikeState={selectedBikeState}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
