import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SocialMedias from "./components/SocialMedias/SocialMedias";
import NavBar from "./components/NavBar/NavBar";
import Sliders from "./components/Slider/Sliders";
import Products from './components/Products/Products'

const App = () => {
  return (
    <>
      <Router>
        <SocialMedias />
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
          <Sliders />
          <Products />
        </Suspense>
      </Router>
    </>
  );
};

export default App;
