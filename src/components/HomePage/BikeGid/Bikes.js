import allBikesData from "./../../../bikesData";

import { useState, useEffect } from "react";

export default function Bikes(props) {
  const [budgetFilterArr, setBudgetFilterArr] = useState([]);

  const filterBikeBudget = () => {
    let arr = [...allBikesData];
    if (props.budgetState === "70,000 - 1,00,000") {
      let filteredArr = arr.filter((bike) => bike.price >= "70,000");
      console.log(filteredArr);
      setBudgetFilterArr(filteredArr);
    }
  };

  useEffect(() => {
    filterBikeBudget();
  }, [props.budgetState]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {props.brandState === "All" &&
        allBikesData.map((bike) => (
          <div style={{ border: "1px solid black" }}>
            <div>{bike.brand}</div>
            <div>{bike.price}</div>
          </div>
        ))}
      {props.selectedBikeState.map((bike) => (
        <div style={{ border: "1px solid black" }}>
          <div>{bike.brand}</div>
          <div>{bike.price}</div>
        </div>
      ))}

      {budgetFilterArr &&
        budgetFilterArr.map((bike) => (
          <div style={{ border: "1px solid black" }}>
            <div>{bike.brand}</div>
            <div>{bike.price}</div>
          </div>
        ))}
    </div>
  );
}
