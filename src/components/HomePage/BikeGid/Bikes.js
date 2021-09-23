import {
  getAllBikes,
  getBikeDetails,
} from "./../../../store/slices/entities/bikes";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Bikes(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBikes());
  }, []);

  const bikes = useSelector(getBikeDetails);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {bikes &&
        bikes.map((bike, index) => (
          <div key={bike.model}>
            <div>
              <img height="100" width="100" src={bike.img} alt={`${index}`} />
            </div>
            <div>{bike.price}</div>
            <div>{bike.model}</div>
          </div>
        ))}
    </div>
  );
}
