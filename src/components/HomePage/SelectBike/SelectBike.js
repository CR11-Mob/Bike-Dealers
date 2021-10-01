import "./SelectBike.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBrands, getAllBikes } from "./../../bikeSlice"; // selectores

import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import { Grid, Box } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { ArrowForward, ArrowBack } from "@material-ui/icons";
import { SvgIcon } from "@material-ui/core";
// import {
//   pageNumber,
//   getPageSize,
// } from "./../../../store/slices/ui/bikePagination";

// import {
//   getAllBikes,
//   filterByBrand,
//   filterByModel,
//   getBrands,
//   getModels,
//   getBikeDetails,
// } from "../../../store/slices/entities/bikes"; // Importing Actions & Selector Functions

// import Bikes from "../BikeGid/Bikes";

export default function SelectBike() {
  // const dispatch =
  const initialBikeValue = "All";

  const brands = useSelector(getBrands);
  const allBikes = useSelector(getAllBikes);

  useEffect(() => {
    console.log("All Brands:", brands);
    console.log("All Bikes Data:", allBikes);
  }, [brands, allBikes]);

  // const loading = useSelector(getLoadingStatus);
  // useEffect(() => {
  //   console.log("loading Status:", loading);
  // }, [loading]);

  // const [pageCount, setPageCount] = useState(0);

  // useEffect(() => {
  //   console.log("page count", pageCount);
  //   dispatch(pageNumber(pageCount));
  //   addActiveBtn();
  // }, [pageCount]);

  // Selectors

  // const models = useSelector(getModels);
  // const details = useSelector(getBikeDetails);
  // const pageSize = useSelector(getPageSize);

  // useEffect(() => {
  //   setTotalCount(pageSize);
  // }, [pageSize]);

  // console.log("brands:", brands);
  // console.log("models:", models);
  // console.log("details:", details);

  // States
  const [brandState, setBrand] = useState(initialBikeValue);
  const [modelState, setModel] = useState(initialBikeValue);
  const [models, setModels] = useState({});
  const [selectedBikes, setSelectedBikes] = useState(allBikes);

  useEffect(() => {
    let obj = {};
    brands.map((brandName, index) => {
      console.log(brandName);
      return (obj[brandName] = allBikes.filter(
        (bike) => bike.brand === brandName
      ));
    });
    console.log("Boject:", obj);
    setModels(obj);
  }, [brands]);

  // const [totalCount, setTotalCount] = useState(0);

  // const totalCountCal = () => {
  //   if (pageSize !== 0) {
  //     let total = Math.ceil(details.length / pageSize);
  //     console.log(total);
  //     setTotalCount(total);
  //   }
  // };

  // useEffect(() => {
  //   setPageCount(0);
  //   totalCountCal();
  // }, [pageSize, brandState, modelState]);

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

  useEffect(() => {
    console.log("Selected Bikes:", selectedBikes);
  }, [selectedBikes]);

  useEffect(() => {
    console.log("brand State:", brandState);
    console.log(`${brandState} model names:`, models);
  }, [brandState, modelState]);

  const DashIcon = (props) => (
    <SvgIcon {...props}>
      {/* <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" /> */}
      <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z" />
    </SvgIcon>
  );

  return (
    <>
      {/* <Grid container justifyContent="space-between" item xs={12}>
        <Grid item xs={4}>
          <IconButton
            aria-label="back"
            onClick={() => {
              setPageCount(pageCount - 1);
            }}
            disabled={pageCount === 0}
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            aria-label="forward"
            onClick={() => {
              setPageCount(pageCount + 1);
            }}
            disabled={pageCount === totalCount - 1}
          >
            <ArrowForward />
          </IconButton>
        </Grid>

        <Grid item xs={4}>
          <Box className="dash-icon-box">
            {Array.from({ length: totalCount }, (_, index) => (
              <Box
                component="span"
                sx={{
                  "& >:hover": {
                    color: "red",
                    fontSize: "1.8rem",
                  },
                }}
                className="dash_buttons"
                key={index}
                onClick={() => {
                  setPageCount(index);
                }}
              >
                <DashIcon color="disabled" />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid> */}

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

        {/* <Grid item xs={10}>
          <Bikes />
        </Grid> */}
      </Grid>
    </>
  );
}
