import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reducers from "./store/reducers/index";
import Main from "./components/mainPage";
import ProfilePage from "./components/profilePage";
import PromisePage from "./components/promisePage";
import { Dropdown } from "react-bootstrap";

function App() {
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <Router>
        <Dropdown>
          <Dropdown.Toggle id="navDropdown">Navigation</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/">Home</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/profile">Profile</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/promise">Promise</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Switch>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/promise">
            <PromisePage />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
