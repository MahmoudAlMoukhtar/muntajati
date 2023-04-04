import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./ErrorBoundary";
import {BrowserRouter} from "react-router-dom";
import {ProductsProdvider} from "./context/ProductsContext";
import {CartProvider} from "./context/CartContext";
import App from "./App.js";
import "animate.css";
import "./index.css";
ReactDOM.render(
  <ErrorBoundary>
    <BrowserRouter>
      <ProductsProdvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProdvider>
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById("root")
);
