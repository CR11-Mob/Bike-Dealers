import { Route, Switch } from "react-router-dom";

import Home from "./components/HomePage/Home";
import BikeDetailPage from "./components/BikeDetail/BikeDetailPage";

import { loadAllBikes } from "./components/bikeSlice";
import { requestAllBikes } from "./apis/bikeApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      let res = await requestAllBikes();
      console.log("--->", res.data);
      dispatch(loadAllBikes(res.data));
      // dispatch(stopLoading());
    }
    fetchData();
  }, [dispatch]);
  return (
    <>
      <Switch>
        <Route path={`/:modelName`}>
          <BikeDetailPage />
        </Route>
        <Route path="/">
          {/* <NavBar /> */}
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
