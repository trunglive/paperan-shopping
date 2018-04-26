import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import NavigationInfo from "../components/navigation/NavigationInfo";
import Header from "../components/navigation/Header";
import Collection from "../components/collection/Collection";
import Checkout from "../components/checkout/Checkout";
import HomepageContainer from "../components/Home/HomepageContainer";
import Footer from "../components/navigation/Footer";

const AppRouter = () => (
  <Router>
    <div className="main-container">
      <Sidebar />
      <Header />
      <NavigationInfo />
      <Switch className="main-content">
        <Route exact path="/" component={HomepageContainer} />
        <Route exact path="/collection" component={Collection} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
