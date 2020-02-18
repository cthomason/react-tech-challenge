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
import { Nav } from "react-bootstrap";

function App() {
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <Router>
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/profile">Profile</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/promise">Promise</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>

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
