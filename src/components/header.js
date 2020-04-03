// import { Link } from "gatsby";
import React from "react";
// import PropTypes from "prop-types"
// import Img from "gatsby-image"
// import { css } from "@emotion/core"

class Header extends React.Component {
  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
        style={{ justifyContent: "center" }}
      >
        <img
          style={{ margin: "auto" }}
          className="image is-96x96"
          src={"/logo.png"}
        />
      </nav>
    );
  }
}

export default Header;
