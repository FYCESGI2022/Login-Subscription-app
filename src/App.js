import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignIn from "./component/SignIn/SignIn";
import SignUp from "./component/SignUp/SignUp";
import Home from "./component/Home/Home";


function App() {
  const [userId, setUserId] = useState(sessionStorage.getItem("userId"));
  return (
    
    <Router>
      <div>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/" exact>
            <SignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
