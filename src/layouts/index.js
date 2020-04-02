import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Link from "gatsby-link";
// import logo from "./logo.png";

import "../style/index.scss";

const Layout = ({ children, site }) => (
  <div>
    <Helmet title="Snipcart + DatoCMS + GatsbyJS Example" />
    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation"
      style={{ backgroundColor: "#c9f4ea" }}
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          {/* width="70" style={{ maxHeight: "5rem" }} */}
          <img src={"/logo.png"} />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
    <div className="Container">
      <div className="Header">
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
      </div>
      <div className="Wrap">{children}</div>
      <div className="Wrap">
        <div className="Footer">
          This website is just an example project to demonstrate how you can
          integrate <a href="https://www.gatsbyjs.org/">Gatsby</a>,{" "}
          <a href="https://snipcart.com/">Snipcart</a> and{" "}
          <a href="https://www.datocms.com">DatoCMS</a>.
        </div>
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;
