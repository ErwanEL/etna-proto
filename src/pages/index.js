import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import CardProduct from "../components/cardProduct";

export default () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <Layout site={data.site}>
        <div className="Catalogue">
          {data.products.edges.map(({ node: product }) => (
            <div className="Catalogue__item card" key={product.id}>
              <CardProduct product={product} />
            </div>
          ))}
        </div>
      </Layout>
    )}
  />
);
