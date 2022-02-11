import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./component/Homepage/Homepage";
import Details from "./component/Details/Details";
import Booking from "./component/Booking/Booking";
import Confirmation from "./component/Confirmation/Confirmation";
import CarLister from "./component/Listing/CarLister";

const App = () => {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
        <Switch>
          <Route exact path="/" component={ Homepage } />
          <Route exact path="/view-all" component={CarLister} />
          <Route path="/details" component={ Details } />
          <Route path="/booking" component={ Booking } />
          <Route path="/confirmation" component={ Confirmation } />
        </Switch>
        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;
