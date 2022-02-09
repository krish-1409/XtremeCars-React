import React from "react";
import "./App.css";
import Header from "./component/Header";
import FirstTab from "./container/FirstTab";
import SecondTab from "./container/SecondTab";
import ThirdTab from "./container/ThirdTab";
import ForthTab from "./container/ForthTab";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  //this is just for demo purpose, change this router as per your requirement
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={FirstTab}></Route>
          <Route path="/firstTab" exact component={FirstTab} />
          <Route path="/secondTab" component={SecondTab} />
          <Route path="/thirdTab" component={ThirdTab} />
          <Route path="/fourthTab" component={ForthTab} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
