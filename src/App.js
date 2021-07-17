import { useContext, useState } from 'react'

import './styles/styles.css'

import Nav from "./components/Nav";
import Header from "./components/Header";
import {Search} from "./components/Search";
import {StockData} from './components/StockData';
import { Graph } from './components/Graph';

import { FetchContext, FetchContextProvider } from './contexts/FetchContext'


function App() {

  return (
    <FetchContextProvider>
        <div id="page-auth">
          <Nav></Nav>
          <main>
            <Header />
            <Search />
            <StockData />
            <Graph />
          </main>
          <aside className="favorites"></aside>
        </div>
    </FetchContextProvider>
  );
}

export default App
