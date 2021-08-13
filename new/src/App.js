import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import HomePage from './pages/home-page-component/home-page.component'
import SignInPage from './pages/signin-page-component/signin-page.component'
import ShopPage from './pages/shop-page-component/shop.component'
import CartPage from "./pages/cart-page-component/cart-page-component";
import Header from "./components/header/header.component";
import {Route} from 'react-router-dom'
import ProductsWithApi from "./pages/products-with-api/products-api.component";



function App() {
  
  return (
    <div className="App">
      <Header/>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signin" component={SignInPage} />
      <Route path="/signin/cart" component={CartPage} />
      <Route path ="/hats" component= {SignInPage}/>
      <Route exact path="/productsAPI" component={ProductsWithApi} />
     
    </div>
  );
}

export default App;
