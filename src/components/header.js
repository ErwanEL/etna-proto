import { Link } from "gatsby";
import React from "react";
// import PropTypes from "prop-types"
// import Img from "gatsby-image"
// import { css } from "@emotion/core"

class Header extends React.Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = { showMenu: false }
  //   }

  //   toggleMenu = () => {
  //     this.setState({
  //       showMenu: !this.state.showMenu,
  //     })
  //   }

  render() {
    // const { siteTitle, logo, globalYaml } = this.props
    // const navLinks = globalYaml.navbar
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{ backgroundColor: "#c9f4ea" }}
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            {/* width="70" style={{ maxHeight: "5rem" }} */}
            <img src={"/logo.png"} />
          </a>

          {/* <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a> */}
        </div>
      </nav>
      //   <nav
      //     classNameName="navbar is-black"
      //     role="navigation"
      //     aria-label="main navigation"
      //     css={navbarCss}
      //   >
      //     <div classNameName="navbar-brand">
      //       <Link classNameName="navbar-item" to={"/"}>
      //         <Img fixed={logo.childImageSharp.fixed} alt={siteTitle} />
      //       </Link>

      //       <a
      //         onClick={this.toggleMenu}
      //         role="button"
      //         classNameName={`navbar-burger burger ${this.state.showMenu &&
      //           "is-active"}`}
      //         aria-label="menu"
      //         aria-expanded="false"
      //         data-target="navbarBasicExample"
      //       >
      //         <span aria-hidden="true"></span>
      //         <span aria-hidden="true"></span>
      //         <span aria-hidden="true"></span>
      //       </a>
      //     </div>
      //     <div
      //       id="navbarBasicExample"
      //       classNameName={`navbar-menu ${this.state.showMenu && "is-active"}`}
      //     >
      //       <div classNameName="navbar-start">
      //         {navLinks.map((navLink, i) => {
      //           return (
      //             <Link
      //               key={i}
      //               to={navLink.slug}
      //               classNameName="navbar-item"
      //               onClick={this.toggleMenu}
      //             >
      //               {navLink.name}
      //             </Link>
      //           )
      //         })}
      //         <Link to={"/mixtapes"} classNameName="navbar-item itemBold">
      //           <span> Mixtapes</span>
      //         </Link>
      //       </div>
      //     </div>
      //   </nav>
    );
  }
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header;

// import { colors, mq } from "../components/styles"

// const navbarCss = css`
//   .itemBold {
//     span {
//       background: lightgrey;
//       padding: 0 5px;
//       border-radius: 3px;
//       font-size: 0.8rem;
//       ${mq[1]} {
//         background: ${colors.primary};
//         &:hover {
//           background: ${colors.secondary};
//         }
//       }
//     }
//   }
// `
