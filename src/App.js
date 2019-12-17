import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reducers from "./store/reducers/index";
import Main from "./components/mainPage";

function App() {
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
