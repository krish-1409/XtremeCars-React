import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import MainPage from "./component/Main Page/MainPage";
import Footer from "./component/Footer/Footer";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  //this is just for demo purpose, change this router as per your requirement
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainPage/>
        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;
