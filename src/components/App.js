import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import PrivateRoute from "./Routes/PrivateRoute";
import Mainpage from "./MainPage/Mainpage";
import Profile from "./Profile";
import PhotoArchive from "./PhotoArchive/PhotoArchive"
import Navigationbar from "./Navbar"
import Nearastreoids from "./NearAstreoids/Nearastreoids"
import AstroSpace from "./AstrosInSpace/AstroSpace"

function App() {
  return (
    <Container >
      
      <Router>

        <AuthProvider>
        <Navigationbar/>
          <Switch>
            
            <Route path="/signin" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/forgot-password" component={ForgotPassword}></Route>
            <PrivateRoute exact path="/" component={Mainpage} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/photo-random" component={PhotoArchive} />
            <PrivateRoute path="/near-astreoids" component={Nearastreoids} />
            <PrivateRoute path="/current-astronauts" component={AstroSpace} />
          </Switch>
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;
