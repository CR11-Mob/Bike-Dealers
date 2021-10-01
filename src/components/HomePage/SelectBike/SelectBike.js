import "./SelectBike.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { getBrands, getAllBikes } from "./../../bikeSlice"; // selectores

// Material Components
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import { Grid, Box } from "@material-ui/core";

// Components
import Pagination from "./sub-components/Pagination";
import Bikes from "./sub-components/Bikes";

export default function SelectBike() {
  const initialBikeValue = "All";

  const brands = useSelector(getBrands);
  const allBikes = useSelector(getAllBikes);

  useEffect(() => {
    console.log("All Brands:", brands);
    console.log("All Bikes Data:", allBikes);
  }, [brands, allBikes]);

  // States
  const [brandState, setBrand] = useState(initialBikeValue);
  const [modelState, setModel] = useState(initialBikeValue);
  const [models, setModels] = useState({});
  const [selectedBikes, setSelectedBikes] = useState(allBikes);

  // Brands with models
  useEffect(() => {
    let obj = {};
    brands.map((brandName, index) => {
      // console.log(brandName);
      return (obj[brandName] = allBikes.filter(
        (bike) => bike.brand === brandName
      ));
    });
    console.log("Boject:", obj);
    setModels(obj);
  }, [brands]);

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

  const [currentPage, setCurrentPage] = useState(0);
  const [bikeGridSize, setBikeGridSize] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
  const [displayBike, setDisplayBike] = useState([]);

  const getTotalPage = () => {
    if (bikeGridSize !== 0) {
      let total = Math.ceil(selectedBikes.length / bikeGridSize);
      // console.log("total pages:", total);
      setTotalPage(total);
    }
  };

  const getDisplayBike = () => {
    let length = currentPage * bikeGridSize + bikeGridSize;
    let arr = [];
    for (let i = currentPage * bikeGridSize; i < length; i++) {
      if (selectedBikes[i]) {
        arr.push(selectedBikes[i]);
      }
    }
    setDisplayBike(arr);
  };

  useEffect(() => {
    console.log("Current Page:", currentPage);
    getDisplayBike();
  }, [currentPage]);

  useEffect(() => {
    console.log("Selected Bikes:", selectedBikes);
    getTotalPage();
    getDisplayBike();
  }, [selectedBikes]);

  useEffect(() => {
    console.log("brand State:", brandState);
    console.log(`${brandState} model names:`, models);
    setCurrentPage(0);
  }, [brandState, modelState]);

  return (
    <>
      <Grid container justifyContent="space-between" item xs={12}>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
        />
      </Grid>

      <Grid container item spacing={4} xs={12}>
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

        <Grid item xs={10}>
          <Bikes displayBike={displayBike} />
        </Grid>
      </Grid>
    </>
  );
}
