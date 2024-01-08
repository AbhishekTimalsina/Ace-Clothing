import React from "react";
import "./SelectCategory.css";

function SelectCategory({ checkBoxState, handleCheckBox }) {
  return (
    <div className="select-category_container">
      <h4>Category</h4>
      <div>
        <span className="category-option">
          <input
            type="checkbox"
            id="category-men"
            name="men"
            checked={checkBoxState.men}
            onChange={handleCheckBox}
          />
          <label htmlFor="category-men">Men</label>
        </span>
        <span className="category-option">
          <input
            type="checkbox"
            id="category-women"
            name="women"
            checked={checkBoxState.women}
            onChange={handleCheckBox}
          />
          <label htmlFor="category-women">Women</label>
        </span>
      </div>
    </div>
  );
}

export default SelectCategory;
