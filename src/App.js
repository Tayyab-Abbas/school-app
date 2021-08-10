import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Signup from "./components/practice/signup";
import Signin from "./components/practice/signin";
import Forgotpassword from "./components/practice/forgotpassword";

export default function App() {
  return (
    
      <div>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/forgotpassword" exact component={Forgotpassword} />
        </Switch>
    </BrowserRouter>
    </div>
  );
}