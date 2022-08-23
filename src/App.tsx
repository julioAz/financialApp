import React from 'react'
import { GlobalStyle } from './styles/global';
import { Header } from './components/header/Header';
import { Dashboard } from './components/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Header />
      <Dashboard/>
      <GlobalStyle />
    </>
  );
}

export default App;
