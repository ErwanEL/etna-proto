import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import Header from "../components/header";
// import logo from "./logo.png";

import "../style/index.scss";

const Layout = ({ children, site }) => (
  <div>
    <Helmet title="Snipcart + DatoCMS + GatsbyJS Example" />
    <Header />
    <div className="Container" style={{ marginTop: "95px" }}>
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
      <div className="Wrap">{children}</div>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>ETNA JOYAS Oficial</strong> | 🇺🇾
          </p>
        </div>
      </footer>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;
