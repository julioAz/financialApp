import React from 'react'
import { GlobalStyle } from './styles/global';
import { Header } from './components/header/Header';
import { Dashboard } from './components/Dashboard/Dashboard';
import { createServer} from 'miragejs'

createServer({
  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'transaction 1',
          amount: 400,
          type: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

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
