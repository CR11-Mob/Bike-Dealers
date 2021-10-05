import { Grid, Box } from "@material-ui/core";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

import { useEffect } from "react";
import { getBrandsData } from "./../../../bikeSlice";
import { useSelector } from "react-redux";

export default function Dropdown(props) {
  const {
    initialBikeValue,
    brands,
    allBikes,
    brandState,
    modelState,
    setBrand,
    setModel,
    setSelectedBikes,
  } = props;

  const models = useSelector(getBrandsData);

  useEffect(() => {
    console.log("Boject2:", models);
  }, [models]);

  // Event Handlers
  const handleBrandChange = (e) => {
    const value = e.target.value;
    setBrand(value);

    if (value === initialBikeValue) {
      setModel(initialBikeValue);
      setSelectedBikes(allBikes);
    } else {
      setModel(initialBikeValue);
      filterByBrands(value);
    }
  };

  const handleModelChange = (e) => {
    const value = e.target.value;
    setModel(value);

    if (value === initialBikeValue) {
      filterByBrands(brandState);
    } else {
      filterByModel(value);
    }
  };

  // Filter functions
  const filterByBrands = (brandName) => {
    let filteredArr = [];
    filteredArr = allBikes.filter((bike) => bike.brand === brandName);
    setSelectedBikes(filteredArr);
  };

  const filterByModel = (modelName) => {
    let filteredArr = [];
    filteredArr = allBikes.filter((bike) => bike.model === modelName);
    setSelectedBikes(filteredArr);
  };

  return (
    <>
      <Grid item xs={12}>
        <Box component="h4" style={{ margin: "0 0 1.5rem 0" }}>
          Search Bikes
        </Box>
      </Grid>

      <Grid container item spacing={2} style={{ marginBottom: "1rem" }}>
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
              {brandState !== initialBikeValue &&
                models[brandState].map((bike) => (
                  <MenuItem
                    key={bike.model}
                    name={bike.model}
                    value={bike.model}
                  >
                    {bike.model}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Box component="h6">Advance Search</Box>
      </Grid>
    </>
  );
}
