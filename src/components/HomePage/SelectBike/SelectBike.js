import { useState, useEffect } from "react";

import { models, detailsByModel, brands } from "./../../../bikesData";

import {
  filterBikesByBrand,
  getBikeBrands,
} from "./../../../store/slices/bikes";

import { useDispatch, useSelector } from "react-redux";

export default function SelectBike(props) {
  // console.log("brands:", brands);
  // console.log("models:", models);
  const brands = useSelector(getBikeBrands);
  const dispatch = useDispatch();
  const bikes = useSelector((state) => state.entities.bikes.brands);

  console.log("brands:", brands);

  console.log("Bikes Sorted by Brands:", bikes);

  // const [brandState, setBrand] = useState("All");

  // const [modelState, setModel] = useState("");

  useEffect(() => {
    console.log("brand State:", props.brandState);
    console.log("model State:", props.modelState);
  }, [props.brandState, props.modelState]);

  // useEffect(() => {
  //   if (props.brandState !== "All")
  //     for (let i = 0; i < models[props.brandState].length; i++) {
  //       let modelName = models[props.brandState][i];

  //       console.log("models name:", modelName);
  //       console.log(`${modelName} details:`, bikeDetails[modelName]);
  //     }
  // }, [props.brandState]);

  return (
    <div>
      <div>Search Bike</div>
      <div>
        <div>
          <select
            key={"brands"}
            name="brands"
            value={props.brandState}
            onChange={(e) => {
              props.setBrand(e.target.value);
              dispatch(filterBikesByBrand({ brand: e.target.value }));
            }}
          >
            <option>{"All"}</option>
            {brands.map((brand) => (
              <option key={brand} name={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* <div>
          <select
            key={"models"}
            name="models"
            value=""
            onChange={(e) => props.setModel(e.target.value)}
            disabled={props.brandState === "All"}
          >
            {props.brandState !== "All" &&
              models[props.brandState].map((model) => (
                <option key={model} name={model} value={model}>
                  {model}
                </option>
              ))}
          </select>
        </div> */}
      </div>
    </div>
  );
}
