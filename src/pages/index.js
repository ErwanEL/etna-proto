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
        <div className="section">
          <div className="columns is-multiline ">
            {data.products.edges.map(({ node: product }) => (
              <div className="column is-one-quarter" key={product.id}>
                <CardProduct product={product} />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )}
  />
);
