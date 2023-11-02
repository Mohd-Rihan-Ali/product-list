import React, { useState } from "react";
import "./filters.css";

const Filters = ({ onFilterChange, onSortChange }) => {
  const [filterCriteria, setFilterCriteria] = useState({});
  const [sortCriteria, setSortCriteria] = useState("");

  const handleFilterChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFilterCriteria({
      ...filterCriteria,
      [name]: value,
    });
    onFilterChange(filterCriteria);
  };

  const handleApplyFilter = () => {
    onFilterChange(filterCriteria);
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortCriteria(value);
    onSortChange(value);
  };

  return (
    <div className="filters">
      <div className="filter-input">
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          name="category"
          id="category"
          onChange={handleFilterChange}
        />
      </div>
      <div className="filter-input">
        <label htmlFor="minPrice">Min Price:</label>
        <input
          type="number"
          name="minPrice"
          id="minPrice"
          onChange={handleFilterChange}
        />
      </div>
      <div className="filter-input">
        <label htmlFor="maxPrice">Max Price:</label>
        <input
          type="number"
          name="maxPrice"
          id="maxPrice"
          onChange={handleFilterChange}
        />
      </div>
      <div className="filter-apply">
        <button onClick={handleApplyFilter} className="apply-filter-button">
          Apply Filter
        </button>
      </div>
      <div className="sort-input">
        <label htmlFor="sort">Sort By:</label>
        <select name="sort" id="sort" onChange={handleSortChange}>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
