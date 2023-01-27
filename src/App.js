import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignIn from "./component/SignIn/SignIn";
import SignUp from "./component/SignUp/SignUp";
import Home from "./component/Home/Home";

function App() {
  return (
    <Router>
    <div>
      <Switch>        
        <Route path="/home" exact component={Home} />
        <Route path="/signIn" exact component={SignIn} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/" component={SignIn} />
      </Switch>
    </div>
  </Router>
);
}


export default App;
