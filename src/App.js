import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Header.js"
import Home from "./Home.js"
import Checkout from "./Checkout"

function App() {
  return (
    <Router>
      <div className="app"> 
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <h1>login page</h1>
          </Route>

          {/* This is default Route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>  
  );
}


        {/* we need react-ROUTER */}
        
        {/* localhost.com/ */}
        {/* localhost.com/checkout */}
        {/* localhost.com/login */}

export default App;
