import React from "react";
import "../style/notificationWsp.scss";
import Img from "gatsby-image";

const NotificationWsp = ({ logoWsp }) => {
  const [show, setShow] = React.useState(true);
  const toggleNotif = () => {
    return setShow(!show);
  };

  return (
    <div
      className={`notification ${!show &&
        "notification-none"} is-fixed-top is-inline has-text-left-mobile has-text-centered-desktop`}
    >
      <button onClick={toggleNotif} className="delete"></button>
      Te gustan algunos de nuestros productos?{" "}
      <strong>Los pedidos se hacen via whatsapp.</strong>{" "}
      <a>Podes pedirnos aquí.</a>
      <Img className="wsp" fixed={logoWsp.childImageSharp.fixed} />
    </div>
  );
};

export default NotificationWsp;

// import React from "react";
// import { StaticQuery, graphql } from "gatsby";
// import "../style/notificationWhatsapp.scss";
// import Img from "gatsby-image";

// const NotificationWhatsapp = () => (
//   <StaticQuery
//     query={graphql`
//       {
//         logowsp: file(relativePath: { eq: "whatsapp-logo-bw.png" }) {
//           childImageSharp {
//             fixed(width: 73, height: 24) {
//   ...GatsbyImageSharpFixed
//             }
//           }
//         }
//       }
//     `}
//     render={(data) => (
//       <div class="notification notification-none is-fixed-top is-inline has-text-left-mobile has-text-centered-desktop">
//         Te gustan algunos de nuestros productos?{" "}
//         <strong>Los pedidos se hacen via whatsapp.</strong>{" "}
//         <a>Podes pedirnos aquí.</a>
//         <Img className="whatsapp" fixed={data.logowsp.childImageSharp.fixed} />
//       </div>
//     )}
//   ></StaticQuery>
// );

// export default NotificationWhatsapp;
