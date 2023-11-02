import React from "react";
import "./App.css"; 

import ProductList from "./components/productList/ProductList"; 

import mockProducts from "./mockProducts";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="app-title">Product List</h1>
      </header>
      <main>
        <ProductList products={mockProducts} />
      </main>
    </div>
  );
}

export default App;
