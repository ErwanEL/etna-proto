import React from "react";
// import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
// import { css } from "@emotion/core"

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
        <div className="card-image">
          <Img sizes={product.image.sizes} />
        </div>{" "}
        <div className="card-content">
          <div className="content">
            <div className="subtitle is-6 has-text-centered">
              {product.name}
            </div>
            <p
              style={{ color: "#79A89D" }}
              className="is-marginless has-text-centered is-size-5"
            >
              {product.price}$
            </p>
          </div>
        </div>
      </div>
  );
};

export default CardProduct;
