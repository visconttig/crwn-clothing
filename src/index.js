import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user.context.jsx";
import { ProductsContextProvider } from "./contexts/products.context.jsx";
import { CartContextProvider } from "./contexts/cart.context.jsx";

ReactDOM.render(
    <BrowserRouter>
      <UserProvider>
        <ProductsContextProvider>   
          <CartContextProvider>
            <App /> 
          </CartContextProvider>
        </ProductsContextProvider>
      </UserProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

