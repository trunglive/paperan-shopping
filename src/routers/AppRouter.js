import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import NavScrolling from "../components/nav-scrolling/NavScrolling";
import Header from "../components/header/Header";
import MainCartView from "../components/menu-checkout-slider/MainCartView";
import HomePage from "../components/home-page/HomePage";
import CollectionGridPage from "../components/collection-grid-page/CollectionGridPage";
import SingleItemPage from "../components/single-item-page/SingleItemPage";
import Footer from "../components/footer/Footer";
import { connect } from "react-redux";
import WithCheckout from "../components/menu-checkout-slider/WithCheckout";

const AppRouter = ({ cart, modal }) => (
  <Router>
    <div className="main-container">
      <Sidebar />
      <NavScrolling />
      <Header />
      <MainCartView cart={cart} isCartOpen={modal.isCartOpen} />
      <Switch className="main-content">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/collection/all" component={CollectionGridPage} />
        <Route exact path="/collection/:type/:id" component={SingleItemPage} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

const mapStateToProps = ({ cart, modal }) => ({
  cart,
  modal
});

export default connect(mapStateToProps)(AppRouter);
