import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import MainPage from "./component/Main Page/MainPage";
import Footer from "./component/Footer/Footer";
import Listing from "./component/Listing/Listing";
import Viewall from "./component/Listing/Containers/Viewall";
import Sedan from "./component/Listing/Containers/Sedan";
import Suv from "./component/Listing/Containers/Suv";
import Coupe from "./component/Listing/Containers/Coupe";
import Hatchback from "./component/Listing/Containers/Hatchback";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header2 from "./component/Header/Header2";

const App = () => {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Header2/>
        <MainPage/>
        <Listing/>
      <Switch>
        <Route exact path="/" component={ Viewall }/>
        <Route path="/view-all" component={ Viewall }/>
        <Route path="/sedan" component={ Sedan }/>
        <Route path="/suv" component={ Suv }/>
        <Route path="/hatchback" component={ Hatchback }/>
        <Route path="/coupe" component={ Coupe }/>
      </Switch>
    
      {/* <Switch>
        <Route exact path="/" component={ Homepage } />
        <Route path="/view-all" component={ Homepage } />
        <Route path="/details" component={ Details } />
        <Route path="/booking" component={ Booking } />
        <Homepage/>
      </Switch> */}
        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;
