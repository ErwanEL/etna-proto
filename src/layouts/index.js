import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import Header from "../components/header";
import NotificationWsp from "../components/notificationWsp";
import Mosaique from "../components/mosaique";
// import Link from "gatsby-link";

// import "../style/index.scss";

const Layout = ({ children, site }) => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 96, height: 96) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoWsp: file(relativePath: { eq: "whatsapp-logo-bw.png" }) {
        childImageSharp {
          fixed(width: 73, height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoUy: file(relativePath: { eq: "uy.png" }) {
        childImageSharp {
          fixed(width: 96, height: 96) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      photosMosaique: allFile(
        filter: { relativeDirectory: { eq: "mosaique" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  return (
    <div>
      <Helmet title="Etna Joyas">
        <html lang="es" />
      </Helmet>
      <Header logo={data.logo} />
      <NotificationWsp logoWsp={data.logoWsp} />
      <Mosaique photosMosaique={data.photosMosaique} />
      <div className="section">{children}</div>
      <footer
        style={{ borderTop: ".5px solid #A89379" }}
        className="footer has-background-white"
      >
        <div className="content has-text-centered">
          <p className="is-marginless">Tienda oficial | Etna Joyas</p>
          <Img fixed={data.logoUy.childImageSharp.fixed}></Img>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

{
  /* <div className="Header">
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
  </div> */
}
