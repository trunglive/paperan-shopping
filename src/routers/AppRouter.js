import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import NavigationInfo from "../components/navigation/NavigationInfo";
import Header from "../components/navigation/Header";
import CollectionGrid from "../components/collection/CollectionGrid";
import Checkout from "../components/checkout/Checkout";
import Homepage from "../components/home/Homepage";
import Footer from "../components/navigation/Footer";

const AppRouter = () => (
  <Router>
    <div className="main-container">
      <Sidebar />
      <Header />
      <NavigationInfo />
      <Switch className="main-content">
        <Route exact path="/" component={Homepage} />
        <Route exact path="/collection/all" component={CollectionGrid} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
