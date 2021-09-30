import { useState, useEffect } from "react";
import "./SelectBike.css";
import {
  pageNumber,
  getPageSize,
} from "./../../../store/slices/ui/bikePagination";

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
import { IconButton } from "@material-ui/core";
import { ArrowForward, ArrowBack } from "@material-ui/icons";
import { SvgIcon } from "@material-ui/core";

import Bikes from "../BikeGid/Bikes";

import { useDispatch, useSelector } from "react-redux";

export default function SelectBike() {
  const dispatch = useDispatch();
  const initialBikeValue = "All";

  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    console.log("page count", pageCount);
    dispatch(pageNumber(pageCount));
    addActiveBtn();
  }, [pageCount]);

  // Selectors
  const brands = useSelector(getBrands);
  const models = useSelector(getModels);
  const details = useSelector(getBikeDetails);
  const pageSize = useSelector(getPageSize);

  // useEffect(() => {
  //   setTotalCount(pageSize);
  // }, [pageSize]);

  console.log("brands:", brands);
  console.log("models:", models);
  console.log("details:", details);

  // States
  const [brandState, setBrand] = useState(initialBikeValue);
  const [modelState, setModel] = useState(initialBikeValue);

  const [totalCount, setTotalCount] = useState(0);

  const totalCountCal = () => {
    if (pageSize !== 0) {
      let total = Math.ceil(details.length / pageSize);
      console.log(total);
      setTotalCount(total);
    }
  };

  useEffect(() => {
    setPageCount(0);
    totalCountCal();
  }, [pageSize, brandState, modelState]);

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

  const DashIcon = (props) => (
    <SvgIcon {...props}>
      {/* <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" /> */}
      <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z" />
    </SvgIcon>
  );

  const addActiveBtn = () => {
    let nodeList = document.querySelectorAll(".dash_buttons");
    console.log(nodeList);
  };

  return (
    <>
      <Grid container justifyContent="space-between" item xs={12}>
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
