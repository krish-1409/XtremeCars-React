import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./component/Homepage/Homepage";
import Details from "./component/Details/Details";

const App = () => {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
        <Switch>
          <Route exact path="/" component={ Homepage } />
          <Route path="/details" component={ Details } />
        </Switch>
        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;
