import React from "react";
import "./Product.css";

function Product({ id, image, title, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>
          {title.length > 100
            ? title.slice(0,50).concat("...")
            : title}
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="the lean startup picture" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
