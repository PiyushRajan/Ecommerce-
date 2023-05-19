import React, { useState, useEffect } from "react";
import { filterByRating } from "../../slice/productSlice";
import { useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";

const RatingFilter = () => {
  const [selectedRatings, setSelectedRatings] = useState([]);
  const dispatch = useDispatch();

  // const handleCategoryChange = (event) => {
  //   const selectedRating = parseInt(event.target.value);
  //   const isChecked = event.target.checked;
  //   dispatch(filterByRating({ rating: selectedRating, isChecked }));
  // };
  useEffect(() => {
    dispatch(filterByRating({ rating: selectedRatings }));
  }, [dispatch, selectedRatings]);

  const handleCategoryChange = (event, ratings) => {
    const isChecked = event.target.checked;
    let updatedRatings = [...selectedRatings];
    if (isChecked) {
      updatedRatings.push(ratings);
    } else {
      updatedRatings = updatedRatings.filter(
        (selectedRating) => selectedRating !== ratings
      );
    }
    console.log(updatedRatings, "updatedRatings");
    setSelectedRatings(updatedRatings);
  };

  return (
    <div className="filter-container">
      <pre className="customer-ratings">CUSTOMER RATINGS</pre>
      <div className="checkbox_input">
        {[1, 2, 3, 4].map((n) => (
          <>
            <label className="label_wrapper">
              <input
                type="checkbox"
                value={n}
                onChange={(event) => handleCategoryChange(event, n)}
              />
              <div className="text_wrapper">
                {n} <AiFillStar /> &nbsp; & above
              </div>
            </label>
          </>
        ))}
      </div>
    </div>
  );
};

export default RatingFilter;
