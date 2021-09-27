import { useState, useEffect } from "react";

import {
  getAllBikes,
  filterByBrand,
  filterByModel,
  getBrands,
  getModels,
  getBikeDetails,
} from "../../../store/slices/entities/bikes"; // Importing Actions & Selector Functions

import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

import { Grid, Box } from "@material-ui/core";
import Bikes from "../BikeGid/Bikes";

import { useDispatch, useSelector } from "react-redux";

export default function SelectBike() {
  const dispatch = useDispatch();
  const initialBikeValue = "All";

  // Selectors
  const brands = useSelector(getBrands);
  const models = useSelector(getModels);
  const details = useSelector(getBikeDetails);

  console.log("brands:", brands);
  console.log("models:", models);
  console.log("details:", details);

  // States
  const [brandState, setBrand] = useState(initialBikeValue);
  const [modelState, setModel] = useState(initialBikeValue);

  // Event Handlers
  const handleBrandChange = (e) => {
    const value = e.target.value;
    if (value === initialBikeValue) {
      setBrand(value);
      setModel(value);
      dispatch(getAllBikes());
    } else {
      setBrand(value);
      dispatch(filterByBrand({ brand: value }));
    }
  };

  const handleModelChange = (e) => {
    const value = e.target.value;
    if (value === initialBikeValue) {
      setModel(value);
      dispatch(filterByBrand({ brand: brandState }));
    } else {
      setModel(value);
      dispatch(filterByModel({ model: value }));
    }
  };

  useEffect(() => {
    console.log("brand State:", brandState);
    console.log("model State:", modelState);
  }, [brandState, modelState]);

  return (
    <>
      <Grid item xs={12}>
        <Box>Controller</Box>
      </Grid>

      <Grid container item spacing={4}>
        <Grid container item xs={2} spacing={2}>
          <Grid item xs={12}>
            <h4 style={{ margin: 0 }}>Search bikes</h4>
          </Grid>

          <Grid item xs={12}>
            <FormControl variant="outlined" style={{ width: "100%" }}>
              <InputLabel id="brand-select">Brands</InputLabel>
              <Select
                labelId="brand-select"
                id="brand"
                name="brands"
                value={brandState}
                label={"Brands"}
                onChange={handleBrandChange}
              >
                <MenuItem
                  key="all-brands"
                  name={initialBikeValue}
                  value={initialBikeValue}
                >
                  <em>All</em>
                </MenuItem>
                {brands.map((brand) => (
                  <MenuItem key={brand} name={brand} value={brand}>
                    {brand}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl variant="outlined" style={{ width: "100%" }}>
              <InputLabel id="model-select">Models</InputLabel>
              <Select
                labelId="model-select"
                id="model"
                name="model"
                value={modelState}
                label={"Models"}
                onChange={handleModelChange}
                disabled={brandState === initialBikeValue}
              >
                <MenuItem
                  key="all-models"
                  name={initialBikeValue}
                  value={initialBikeValue}
                >
                  <em>All</em>
                </MenuItem>
                {models.map((model) => (
                  <MenuItem key={model} name={model} value={model}>
                    {model}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid item xs={10}>
          <Bikes />
        </Grid>
      </Grid>
    </>
  );
}
