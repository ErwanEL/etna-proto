import React from "react";
import Img from "gatsby-image";

const Header = ({ logo }) => {
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
      style={{ textAlign: "center", zIndex: "10" }}
    >
      <Img style={{ margin: "auto" }} fixed={logo.childImageSharp.fixed} />
      <a
        style={{ position: "absolute", right: "20px", top: "35px" }}
        class="snipcart-checkout snipcart-cart-header__option snipcart-cart-header__count snipcart__font--secondary snipcart__font--bold"
      >
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          alt=""
          title=""
          class="snipcart-cart-header__icon snipcart__icon--blue-dark snipcart__icon"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z"
            fill="#0a0a0a"
          ></path>
        </svg>
        <span
          style={{
            position: "relative",
            right: "10px",
            bottom: "11px",
            padding: "5px",
            borderRadius: "10px",
            height: "20px",
            backgroundColor: "#a87868",
            color: "white",
          }}
          class="tag is-light snipcart-items-count"
        ></span>
      </a>
      {/* <a class="snipcart-checkout">
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          alt=""
          title=""
          class="snipcart-cart-header__icon snipcart__icon--blue-dark snipcart__icon"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z"
            fill="#313749"
          ></path>
        </svg>
        <span class="tag is-primary snipcart-items-count">0</span>
        <span class="snipcart-total-price"></span>
      </a> */}
    </nav>
  );
};

export default Header;

// // import { Link } from "gatsby";
// // import React from "react";
// // import PropTypes from "prop-types"
// import Img from "gatsby-image";
// // import { css } from "@emotion/core"
// import React from "react";
// import { StaticQuery, graphql } from "gatsby";

// const Header = () => (
//   <StaticQuery
//     query={graphql`
//       {
//         logo: file(relativePath: { eq: "logo.png" }) {
//           childImageSharp {
//             fixed(width: 96, height: 96) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//       }
//     `}
//     render={(data) => (
//       <nav
//         className="navbar is-fixed-top"
//         role="navigation"
//         aria-label="main navigation"
//         style={{ textAlign: "center" }}
//       >
//         <Img
//           style={{ margin: "auto" }}
//           // className="image is-96x96"
//           fixed={data.logo.childImageSharp.fixed}
//         />
//         {/* <img
//           alt="logo"
//           style={{ margin: "auto" }}
//           className="image is-96x96"
//           src={"/logo.png"}
//         /> */}
//       </nav>
//     )}
//   ></StaticQuery>
// );

// export default Header;

// class Header extends React.Component {
//   render() {
//     return (
//       <nav
//         className="navbar is-fixed-top"
//         role="navigation"
//         aria-label="main navigation"
//         style={{ justifyContent: "center" }}
//       >
//         <img
//           alt="logo"
//           style={{ margin: "auto" }}
//           className="image is-96x96"
//           src={"/logo.png"}
//         />
//       </nav>
//     );
//   }
// }

// export default Header;
