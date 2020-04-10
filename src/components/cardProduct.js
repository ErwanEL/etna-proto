import React from "react";
// import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
// import { css } from "@emotion/core"
import "../style/card.scss";

const CardProduct = ({ product }) => {
  return (
    <div
      className="card"
      data-item-id={product.id}
      data-item-price={product.price}
      data-item-image={product.image.url}
      data-item-name={product.name}
      data-item-url={`/`}
    >
      <Img
        className="card-image "
        style={{ paddingTop: "25%" }}
        sizes={product.image.sizes}
      />
      <div className="card-content">
        <p className="title-product is-6">{product.name}</p>
        <span className="price is-size-5">{product.price}$</span>
        {product.stock && <span class="stock tag is-light">Sin stock</span>}
      </div>
    </div>
  );
};

export default CardProduct;
