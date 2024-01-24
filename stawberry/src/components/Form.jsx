import React from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp"


const UserForm = () => {

    return ( 
      <Router>
        <div>
            <Switch>
                <Route path="/"><SignIn/> </Route>
                {/* <Route path = "/signup" component={SignUp} /> */}
            </Switch>
        </div>
      </Router>
     );
}
 
export default UserForm;