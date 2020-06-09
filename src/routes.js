import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavbarTemplate from './template/Navbar';
import Home from './pages/Home';
import Detail from './pages/Detail';

const Routes = () => (
  <BrowserRouter>
    <NavbarTemplate />

    <Route component={Home} path="/" exact />
    <Route component={Detail} path="/pokemon/:name" exact />
  </BrowserRouter>
);

export default Routes;
