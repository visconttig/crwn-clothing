import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user.context.jsx";
import { CategoriesContextProvider } from "./contexts/categories.context.jsx";
import { CartContextProvider } from "./contexts/cart.context.jsx";

ReactDOM.render(
    <BrowserRouter>
      <UserProvider>
        <CategoriesContextProvider>   
          <CartContextProvider>
            <App /> 
          </CartContextProvider>
        </CategoriesContextProvider>
      </UserProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

