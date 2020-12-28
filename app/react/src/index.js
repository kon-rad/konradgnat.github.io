import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LegacyHeader from "./components/organisms/LegacyHeader";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route exact path="/:slug">
          <PostDetail />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
