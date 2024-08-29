import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import History from "./components/History";
import F1Timer from "./components/F1Timer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={UserDashboard} />
        <Route path="/history" component={History} />
        <Route path="/f1-timer" component={F1Timer} />
      </Switch>
    </Router>
  );
}

export default App;
