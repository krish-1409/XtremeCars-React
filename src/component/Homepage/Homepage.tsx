import React from 'react'
import MainPage from '../Main Page/MainPage'
import Listing from '../Listing/Listing'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Viewall from '../Listing/Containers/Viewall'
import Sedan from '../Listing/Containers/Sedan'
import Suv from '../Listing/Containers/Suv'
import Coupe from '../Listing/Containers/Coupe'
import Hatchback from '../Listing/Containers/Hatchback'
import Header2 from '../Header/Header2'


const Homepage = () => {
  return (
      // <BrowserRouter>
    <div>
        <Header2/>
        <MainPage/>
        <Listing />

    {/* <Switch> */}
        <Route exact path="/" component={ Viewall }/>
        <Route path="/view-all" component={ Viewall }/>
        <Route path="view-all/sedan" exact component={ Sedan }/>
        <Route path="/suv" component={ Suv }/>
        <Route path="/hatchback" component={ Hatchback }/>
        <Route path="/coupe" component={ Coupe }/>
    {/* </Switch> */}
    
    </div>
    // {/* </BrowserRouter> */}
    
  )
}

export default Homepage