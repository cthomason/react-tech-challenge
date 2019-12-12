import React from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";

import './App.css';
import reducers from "./store/reducers/index";
import Main from "./components/main";

function App() {

  const store = createStore(reducers);
  console.log(store);

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
