import React from "react";
import Img from "gatsby-image";
import "../style/mosaique.scss";
import "../style/media-queries.scss";

const Mosaique = ({ photosMosaique }) => {
  return (
    <div className="section" style={{ paddingTop: "0px", marginTop: "95px" }}>
      <div className="mosaic">
        {photosMosaique.edges.map(({ node: image }) => (
          <div className="tile">
            <Img className="img" fluid={image.childImageSharp.fluid} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mosaique;
