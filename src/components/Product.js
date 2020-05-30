import React from "react";
import { FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";

const Product = ({ item, addToCart }) => {
  return (
    <div className="card">
      <div className="price-corner"></div>
      <div className="image-wrapper">
        <img src={item.image} height="120" alt="product" />
      </div>
      <div className="content-wrapper">
        <h3 className="title">{item.title}</h3>
        <p className="price">
          {" "}
          <span>Ksh</span>
          {item.price}
        </p>
      </div>
      <div className="inner-content-wrapper">
        <div className="category">
          <small>{item.category}</small>
        </div>
      </div>
      <button value={item.id} onClick={addToCart}>
        Add To Cart
      </button>
      <div className="icons">
        <span className="icon icon1">
          <FaEye />
        </span>
        <span className="icon icon1">
          <FaHeart />
        </span>
        <span className="icon icon1">
          <FaShoppingCart />
        </span>
      </div>
    </div>
  );
};
export default Product;
