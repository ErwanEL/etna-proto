import { Link } from "gatsby";
import React from "react";
// import PropTypes from "prop-types"
// import Img from "gatsby-image"
// import { css } from "@emotion/core"

class Header extends React.Component {
  render() {
    return (
      <section class="hero" style={{ backgroundColor: "#c9f4ea" }}>
        <div class="hero-body is-paddingless">
          <div class="container">
            <img class="image is-128x128" src={"/logo.png"} width="70" />
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
