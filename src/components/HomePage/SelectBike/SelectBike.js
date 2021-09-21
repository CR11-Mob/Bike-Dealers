import { useState, useEffect } from "react";

import {
  getAllBikes,
  filterByBrand,
  filterByModel,
  getBrands,
  getModels,
  getBikeDetails,
} from "./../../../store/slices/bikes"; // Importing Actions & Selector Functions

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
      <div>Search Bike</div>
      <div>
        <div>
          <select
            key={"brands"}
            name="brands"
            value={brandState}
            onChange={handleBrandChange}
          >
            <option
              key="all-brands"
              name={initialBikeValue}
              value={initialBikeValue}
            >
              {initialBikeValue}
            </option>
            {brands.map((brand) => (
              <option key={brand} name={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
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
