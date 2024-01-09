import React from "react";
import "./PriceFilter.css";

function PriceFilter({ priceFlter, handlePriceFilter }) {
  return (
    <div className="price-filter_wrapper">
      <label htmlFor="price-filter">Sort by:</label>
      <select id="price-filter" value={priceFlter} onChange={handlePriceFilter}>
        <option value="default" disabled hidden>
          Select an option
        </option>
        <option value="high-to-low">(Price) Highest to lowest</option>
        <option value="low-to-high">(Price) Lowest to highest</option>
      </select>
    </div>
  );
}

export default PriceFilter;
