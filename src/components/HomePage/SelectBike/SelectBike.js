import { useState, useEffect } from "react";

import {
  getAllBikes,
  filterByBrand,
  filterByModel,
  getBrands,
  getModels,
  getBikeDetails,
} from "../../../store/slices/entities/bikes"; // Importing Actions & Selector Functions

import {
  InputLabel,
  MenuItem,
  ListSubheader,
  FormControl,
  Select,
} from "@material-ui/core";

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
    <div>
      <div>
        <h4>Search bikes</h4>
      </div>
      <div>
        {/* <FormControl style={{ width: "50%" }}>
          <InputLabel htmlFor="brand">Brand</InputLabel>
          <Select
            key={"brands"}
            name="brands"
            defaultValue={brandState}
            id="brand"
            label="Brand"
            onChange={handleBrandChange}
            variant="outlined"
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
        </FormControl> */}
        <div>
          <FormControl variant="outlined" style={{ width: "50%" }}>
            <InputLabel id="brand-select">Brands</InputLabel>
            <Select
              labelId="brand-select"
              id="brand"
              name="brands"
              value={brandState}
              // variant="outlined"
              label="Brands"
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
        </div>

        <div>
          <FormControl variant="outlined" style={{ width: "50%" }}>
            <InputLabel id="model-select">Models</InputLabel>
            <Select
              labelId="model-select"
              id="model"
              name="model"
              value={modelState}
              // variant="outlined"
              label="Models"
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
        </div>
        <div>
          <select
            key={"models"}
            name="models"
            value={modelState}
            onChange={handleModelChange}
            disabled={brandState === initialBikeValue}
          >
            <option
              key="all-models"
              name={initialBikeValue}
              value={initialBikeValue}
            >
              {initialBikeValue}
            </option>
            {brandState !== initialBikeValue &&
              models.map((model) => (
                <option key={model} name={model} value={model}>
                  {model}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
}
