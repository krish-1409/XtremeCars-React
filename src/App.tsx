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


const App = () => {
  //this is just for demo purpose, change this router as per your requirement
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
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


        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;
