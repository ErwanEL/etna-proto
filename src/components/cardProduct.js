import React from "react";
import Img from "gatsby-image";
import "../style/card.scss";

const CardProduct = ({ product }) => {
  return (
    <div
      // onClick={() =>
      //   document.querySelector(".notification").classList.remove("is-hidden")
      // }
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
      {/* <button
        class="snipcart-add-item button is-light"
        data-item-id={product.id}
        data-item-price={product.price}
        data-item-url="/paintings/starry-night"
        data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
        data-item-image={product.image.url}
        data-item-name={product.name}
      >
        Agregar al carrito
      </button> */}
      <div className="card-content">
        <p className="title-product is-6">{product.name}</p>
        <span className="price is-size-5">{product.price}$</span>
        {product.stock && <span class="stock tag is-light">Sin stock</span>}
      </div>
      <footer class="card-footer ">
        <a
          href="#"
          class="card-footer-item snipcart-add-item agregarButton"
          data-item-id={product.id}
          data-item-price={product.price}
          data-item-url="/paintings/starry-night"
          data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
          data-item-image={product.image.url}
          data-item-name={product.name}
        >
          Agregar al carrito
        </a>
      </footer>
    </div>
  );
};

export default CardProduct;
