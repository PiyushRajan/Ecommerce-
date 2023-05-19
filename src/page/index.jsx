import React from "react";
import { useEffect } from "react";
import { setProduct } from "../slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import RatingFilter from "../components/filterByRating";
import SortFilter from "../components/sortByPrice";
import { AiFillStar } from "react-icons/ai";

const Home = () => {
  const dispatch = useDispatch();
  const { products, filterProducts } = useSelector((state) => state.Products);

  const fetchData = () => {
    return fetch("data.json")
      .then((response) => response.json())
      .then((data) => dispatch(setProduct(data)));
  };
  console.log(filterProducts, "filterProducts");

  useEffect(() => {
    fetchData();
  }, []);
  console.log(products);
  return (
    <>
      <SortFilter />
      <hr />
      <div className="select_wrapper">
        <RatingFilter />
        <div className="grid-container">
          {(filterProducts?.length > 0 ? filterProducts : products)?.map(
            (product) => {
              return (
                <div key={product.id} className="container">
                  <div className="wrapper">
                    <div className="img-container">
                      <img className="image" src={product.image} alt="image" />
                    </div>
                    <div className=" name-container">{product.name}</div>
                    <div className="category">{product.category}</div>
                    <div className="rating-price-wrapper">
                      <div className="rating">
                        {product.rating}
                        <AiFillStar />
                      </div>
                      <div className="price">₹{product.price}</div>
                    </div>
                    <div className="offer">{product.offer}</div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
