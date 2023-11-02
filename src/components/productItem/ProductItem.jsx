import React from "react";
import "./productItem.css"; 

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
    </div>
  );
};

export default ProductItem;
