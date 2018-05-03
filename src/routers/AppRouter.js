import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import NavScrolling from "../components/nav-scrolling/NavScrolling";
import Header from "../components/header/Header";
import HomePage from "../components/home-page/HomePage";
import CollectionGridPage from "../components/collection-grid-page/CollectionGridPage";
import SingleItemPage from '../components/single-item-page/SingleItemPage';

import Footer from "../components/navigation/Footer";

const AppRouter = () => (
  <Router>
    <div className="main-container">
      <Sidebar />
      <NavScrolling />
      <Header />
      <Switch className="main-content">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/collection/all" component={CollectionGridPage} />
        <Route exact path="/collection/:type/:id" component={SingleItemPage} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
