// import NavBar from "./components/NavBar/NavBar";
import Home from "./components/HomePage/Home";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/configureStore";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <NavBar /> */}
        <Home />
      </Router>
    </Provider>
  );
}

export default App;
