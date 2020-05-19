import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAUthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import Footer from "./componets/layout/Footer";
import Navbar from "./componets/layout/Navbar";
import Landing from "./componets/layout/Landing";
import Stock from "./componets/screens/Stock";
import Quote from "./componets/screens/Quote";
import Dashboard from "./componets/screens/dashboard";
import Register from "./componets/screens/auth/Register";
import Login from "./componets/screens/auth/Login";

import "./App.css";

//check for token
if (localStorage.jwtToken) {
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //logour user
    store.dispatch(logoutUser());
    // redirect to login
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="Container">
              <Route exact path="/stock" component={Stock} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/quote/:symbol" component={Quote} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
