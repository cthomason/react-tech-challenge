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

function App() {
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/promise">Promise</Link>
              </li>
            </ul>
          </nav>

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
        </div>
      </Router>
    </Provider>
  );
}

export default App;
