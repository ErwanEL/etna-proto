import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
// import Link from "gatsby-link";
import Header from "../components/header";
// import logo from "./logo.png";

// import "../style/index.scss";

const Layout = ({ children, site }) => (
  <div>
    <Helmet title="Etna Joyas" />
    <Header />
    {/* <div className="" style={{ marginTop: "95px" }}> */}
    {/* <div className="Header">
        <div className="Wrap">
          <div className="Header__body">
            <h1 className="Header__title">
              <Link data-text={site.siteMetadata.siteName} to="/">
                {site.siteMetadata.siteName}
              </Link>
            </h1>
            <div className="Header__summary snipcart-summary snipcart-checkout">
              <div className="Header__summary__title">🛍 MY CART 🛍</div>
              <div className="Header__summary__line">
                Number of items: <span className="snipcart-total-items"></span>
              </div>
              <div className="Header__summary__line">
                Total price: <span className="snipcart-total-price"></span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    <div className="section" style={{ marginTop: "95px" }}>
      {children}
    </div>
    <footer
      style={{ borderTop: ".5px solid #A89379" }}
      className="footer has-background-white"
    >
      <div className="content has-text-centered">
        <p className="is-marginless">Tienda oficial | Etna Joyas</p>
        <img
          style={{ margin: "auto" }}
          className="image is-96x96"
          src={"/uy.png"}
          alt="uy"
        />
      </div>
    </footer>
    {/* </div> */}
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
