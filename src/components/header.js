import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 96, height: 96) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
      style={{ textAlign: "center" }}
    >
      <Img style={{ margin: "auto" }} fixed={data.logo.childImageSharp.fixed} />
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
