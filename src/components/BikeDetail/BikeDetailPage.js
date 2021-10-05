import { useEffect } from "react";
import { useParams } from "react-router";

import { getLoadingStatus, startLoading, stopLoading } from "./../bikeSlice";
import { useSelector, useDispatch } from "react-redux";

export default function BikeDetailPage(props) {
  const loading = useSelector(getLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading) {
      dispatch(startLoading());
    }
  }, []);
  useEffect(() => {
    console.log("initial loading:", loading);
    if (loading) {
      setTimeout(() => {
        dispatch(stopLoading());
        console.log("loading stop:", loading);
      }, 1000);
    }
  }, [loading]);

  const { modelName } = useParams();

  useEffect(() => {
    console.log("pathName:", modelName);
  }, [modelName]);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>LOADING...</h1>;
  }

  return <h1 style={{ textAlign: "center" }}>This is bike detail page</h1>;
}
