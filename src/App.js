import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SocialMedias from "./components/SocialMedias/SocialMedias";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";



const Home = lazy(() => import('./pages/Home/Home'));
const ProductItem = lazy(() => import('./pages/ProductItem/ProductItem'));
const Carrito = lazy(() => import('./pages/Carrito/Carrito'));

const App = () => {
  return (
    <>
      <Router>
        <SocialMedias />
        <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/product" component={ProductItem}/>
          <Route exact path="/carrito" component={Carrito}/>
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
};

export default App;
