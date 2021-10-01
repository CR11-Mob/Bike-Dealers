import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import Home from "./components/HomePage/Home";

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
