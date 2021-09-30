import {
  getAllBikes,
  getBikeDetails,
} from "./../../../store/slices/entities/bikes";
import {
  gridSize,
  displayBike,
} from "./../../../store/slices/ui/bikePagination";

import {
  getBikeView,
  getPageNumber,
} from "./../../../store/slices/ui/bikePagination";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Bikes(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBikes());
  }, []);

  useEffect(() => {
    dispatch(gridSize(5));
  }, []);
  const bikes = useSelector(getBikeDetails);
  const pageNumber = useSelector(getPageNumber);

  useEffect(() => {
    console.log("bikes***", bikes);
    dispatch(displayBike(bikes));
  }, [bikes, pageNumber]);

  useEffect(() => {}, []);

  const bikeView = useSelector(getBikeView);
  useEffect(() => {
    console.log("bike View Arr", bikeView);
    // dispatch(displayBike(bikes));
  }, [bikeView]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {bikeView &&
        bikeView.map((bike, index) => (
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
