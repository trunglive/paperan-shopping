import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from '../components/Homepage';
import Blog from '../components/Blog';
import Checkout from '../components/Checkout';
import TopMenu from '../components/TopMenu';
import BottomMenu from '../components/BottomMenu';

const AppRouter = () => (
  <Router>
    <div>
      <TopMenu />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/checkout" component={Checkout} />
        <Route component={NotFoundPage} />
      </Switch>
      <BottomMenu />
    </div>
  </Router>
);