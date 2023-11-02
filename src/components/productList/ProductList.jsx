import React, { useState } from "react";
import ProductItem from "../productItem/ProductItem";
import Filters from "../filters/Filters";
import Pagination from "../pagination/Pagination";
import "./productList.css";

const ProductList = ({ products }) => {
  const [filterCriteria, setFilterCriteria] = useState({});
  const [sortCriteria, setSortCriteria] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const applyFilter = () => {
    let filtered = [...products];

    if (filterCriteria.category) {
      filtered = filtered.filter((product) => {
        if (product.category) {
          return product.category
            .toLowerCase()
            .includes(filterCriteria.category.toLowerCase());
        }
        return false;
      });
    }

    if (filterCriteria.minPrice) {
      filtered = filtered.filter(
        (product) => product.price >= parseFloat(filterCriteria.minPrice)
      );
    }

    if (filterCriteria.maxPrice) {
      filtered = filtered.filter(
        (product) => product.price <= parseFloat(filterCriteria.maxPrice)
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleFilterChange = (newFilterCriteria) => {
    setFilterCriteria(newFilterCriteria);

    let filtered = [...products];
    if (newFilterCriteria.category) {
      filtered = filtered.filter((product) => {
        return product.title.toLowerCase().includes(newFilterCriteria.category.toLowerCase());
      });
    }

    if (newFilterCriteria.minPrice) {
      filtered = filtered.filter(
        (product) => product.price >= parseFloat(newFilterCriteria.minPrice)
      );
    }

    if (newFilterCriteria.maxPrice) {
      filtered = filtered.filter(
        (product) => product.price <= parseFloat(newFilterCriteria.maxPrice)
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleSortChange = (sortingCriteria) => {
    const sorted = [...filteredProducts].sort((a, b) => {
      if (sortingCriteria === "price") {
        return a.price - b.price;
      } else if (sortingCriteria === "name") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
    setFilteredProducts(sorted);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="product-list">
      <h1 className="product-list-title">Product List</h1>
      <Filters
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      {currentProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ProductList;
