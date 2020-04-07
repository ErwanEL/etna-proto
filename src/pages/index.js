import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/index";
import CardProduct from "../components/cardProduct";
import "typeface-playfair-display";

const fontPlaifairDisplay = {
  fontFamily: "Playfair Display ,serif",
};

const Catalogue = ({ data }) => {
  return (
    <Layout site={data.site}>
      <div className="container" style={fontPlaifairDisplay}>
        <h1 className="title is-4" style={{ color: "#a87868" }}>
          Nuestra colección
        </h1>

        <div className="columns is-multiline ">
          {data.products.edges.map(({ node: product }) => (
            <div className="column is-one-quarter" key={product.id}>
              <CardProduct product={product} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query CatalogueQuery {
    products: allDatoCmsProduct {
      edges {
        node {
          id
          name
          price
          image {
            url
            sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;

export default Catalogue;
