import React from "react";
// import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import { css } from "@emotion/core"

const CardProduct = ({ product }) => {
  return (
    <div>
      <div
        className="Product snipcart-add-item"
        data-item-id={product.id}
        data-item-price={product.price}
        data-item-image={product.image.url}
        data-item-name={product.name}
        data-item-url={`/`}
      >
        <div className="Product__image">
          <Img sizes={product.image.sizes} />
        </div>{" "}
        <div className="Product__details">
          <div className="Product__name">
            {product.name}
            <div className="Product__price">{product.price}€</div>
          </div>
          <span className="Product__buy">Buy now</span>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
