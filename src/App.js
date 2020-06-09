import React from 'react';
import Routes from './routes';
import GlobalStyle from './themes/globalStyle';
import './App.css';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
