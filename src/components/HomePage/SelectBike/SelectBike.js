import { useState, useEffect } from "react";

import { brands, models, bikeDetails } from "./../../../bikesData";

export default function SelectBike() {
  // console.log("brands:", brands);
  // console.log("models:", models);

  const [brandState, setBrand] = useState("All");

  const [modelState, setModel] = useState("");

  useEffect(() => {
    console.log("brand State:", brandState);
    console.log("model State:", modelState);
  }, [brandState, modelState]);

  useEffect(() => {
    if (brandState !== "All")
      for (let i = 0; i < models[brandState].length; i++) {
        let modelName = models[brandState][i];
        console.log("models name:", modelName);
        console.log(`${modelName} details:`, bikeDetails[modelName]);
      }
  }, [brandState]);

  return (
    <div>
      <div>Search Bike</div>
      <div>
        <div>
          <select
            key={"brands"}
            name="brands"
            value={brandState}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option>{"All"}</option>
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
            value=""
            onChange={(e) => setModel(e.target.value)}
            disabled={brandState === "All"}
          >
            {brandState !== "All" &&
              models[brandState].map((model) => (
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
