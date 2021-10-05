import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getLoadingStatus, getAllModelsData } from "./../bikeSlice"; // Selectors
import { startLoading, stopLoading, setModelsData } from "./../bikeSlice"; // Actions
import { useSelector, useDispatch } from "react-redux";

export default function BikeDetailPage(props) {
  const dispatch = useDispatch();
  const loading = useSelector(getLoadingStatus);
  const modelsData = useSelector(getAllModelsData);

  const { bikeUrlStr } = useParams();

  const [modelName, setModelName] = useState("");

  useEffect(() => {
    if (!loading) {
      dispatch(startLoading());
    }
  }, []);

  useEffect(() => {
    console.log("All model data", modelsData);
  }, [modelsData]);

  useEffect(() => {
    console.log("pathName:", bikeUrlStr);
    let splitedArr = bikeUrlStr.split("-");
    let modelStr = splitedArr[1].replace(/_/g, " ");
    // console.log("model str:", modelStr);
    // console.log("Splited Array", splitedArr);
    setModelName(modelStr);
  }, [bikeUrlStr]);

  useEffect(() => {
    console.log("model detail page:", modelName);
  }, [modelName]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        dispatch(setModelsData());
        dispatch(stopLoading());
      }, 1000);
    }
    console.log("loading status:", loading);
  }, [loading]);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>LOADING...</h1>;
  }

  return <h1 style={{ textAlign: "center" }}>This is bike detail page</h1>;
}
