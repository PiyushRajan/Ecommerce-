import React, { useState } from "react";
import { sorting } from "../../slice/productSlice";
import { useDispatch } from "react-redux";

const SortFilter = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch();

  const handleCategoryChange = (value) => {
    setSelectedOption(value);
    dispatch(sorting(value));
  };

  return (
    <div className="sort-filter-container">
      <div className="sort-heading">Sort By</div>
      <div
        className={
          selectedOption === "low_first" ? "selected" : "sort_category"
        }
        onClick={() => handleCategoryChange("low_first")}
      >
        Price - Low to High
      </div>
      <div
        className={
          selectedOption === "high_first" ? "selected" : "sort_category"
        }
        onClick={() => handleCategoryChange("high_first")}
      >
        Price - High to Low
      </div>
    </div>
  );
};

export default SortFilter;
