import React from 'react';
import { AdvicesSiteDetails } from './advices/AdvicesSiteDetails';

import Header from './main/Header';
import MenuBar from './main/MenuBar';
import AuctionsSite from './auction/AuctionSite';
import AdvicesSite from './advices/AdvicesSite';
import { LogInSite } from './auth/LoginSite';
import CartSite from './auction/CartSite';

import { Route, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header title="Auction Portal - Redux" />
      <main className="container">
        <MenuBar />
        <Routes>
          <Route path="/" element={<Navigate to="/auctions" />} />
          <Route path="/auctions" element={<AuctionsSite />} />
          <Route path="/advices" element={<AdvicesSite />}>
            <Route path="" element={<div> Choose topic... </div>}/>
            <Route path=":articleId" element={<AdvicesSiteDetails />}/>
          </Route>
          <Route path="/log-in" element={<LogInSite />} />
          <Route path="/cart" element={ <CartSite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
