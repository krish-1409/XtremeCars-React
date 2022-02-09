import React from "react";
import "./App.css";
import Header from "./component/Header/Header";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  //this is just for demo purpose, change this router as per your requirement
  return (
    <BrowserRouter>
      <div className="App">
        <Header />


      </div>
    </BrowserRouter>
  );
};

export default App;
