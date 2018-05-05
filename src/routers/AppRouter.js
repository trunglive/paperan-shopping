import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import SectionNavScrolling from "../components/nav-scrolling/SectionNavScrolling";
import FilterNavScrolling from "../components/nav-scrolling/FilterNavScrolling";
import BackToCollectionScrolling from "../components/nav-scrolling/BackToCollectionScrolling";
import Header from "../components/header/Header";
import MainCartView from "../components/menu-checkout-slider/MainCartView";
import HomePage from "../components/home-page/HomePage";
import CollectionGridPage from "../components/collection-grid-page/CollectionGridPage";
import SingleItemPage from "../components/single-item-page/SingleItemPage";
import Footer from "../components/footer/Footer";
import { connect } from "react-redux";
import WithCheckout from "../components/menu-checkout-slider/WithCheckout";

const AppRouter = ({ cart, modal, route }) => (
  <Router>
    <div className="main-container">
      <Sidebar isFilterShown={modal.isFilterShown} />
      {route === "/" && <SectionNavScrolling />}
      {(route === "/collection/all" || route === "/collection/all/") && (
        <FilterNavScrolling />
      )}
      {route === "/collection/:type/:id" && <BackToCollectionScrolling />}
      <Header />
      <MainCartView cart={cart} isCartOpen={modal.isCartOpen} />
      <Switch className="main-content">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/collection/all" component={CollectionGridPage} />
        />
        <Route exact path="/collection/:type/:id" component={SingleItemPage} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

const mapStateToProps = ({ cart, modal, route }) => ({
  cart,
  modal,
  route: route.currentRoute
});

export default connect(mapStateToProps)(AppRouter);
