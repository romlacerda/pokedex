import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavbarTemplate from './template/Navbar';
import Home from './pages/Home';
import Detail from './pages/Detail';

import GlobalStyle from './themes/globalStyle';
import './App.css';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavbarTemplate />
      <BrowserRouter>
        <Route component={Home} path="/" exact />
        <Route component={Detail} path="/pokemon" exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
