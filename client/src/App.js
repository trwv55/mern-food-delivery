import React, { useState } from 'react';
import './scss/app.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import ShoppingCart from './components/ShoppingCart';
import Menu from './pages/Menu';
import LogInScreen from './pages/LogInScreen';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="app">
        <Header handleCart={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<LogInScreen />} />
        </Routes>
        <Footer />
        <ShoppingCart cartOpen={cartOpen} closeCart={() => setCartOpen(false)} />
      </div>
    </BrowserRouter>
  );
}

export default App;
