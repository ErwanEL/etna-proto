require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteName: "My Shop",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-datocms`,
      // options: { apiToken: process.env.DATO_API_TOKEN },
      options: { apiToken: "b4551c2c6b78d538dd567c90c14c19" },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "es",
      },
    },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: "3.0.15",
        publicApiKey:
          "ZjVjZWJkMDQtNDQwMy00NjMwLWE1NDUtOTllYWVjNzFhZWRhNjM3Mjk3MzY4MTA5OTM1NjE3", // use public api key here or in environment variable
        defaultLang: "es",
        currency: "uyu",
        openCartOnAdd: false,
        locales: {
          fr: {
            actions: {
              checkout: "Valider le panier",
            },
          },
        },
        innerHTML: `
          <billing section="bottom">
              <!-- Customization goes here -->
          </billing>`,
      },
    },
    // {
    //   resolve: "gatsby-plugin-snipcartv3",
    //   options: {
    //     apiKey:
    //       "ZjVjZWJkMDQtNDQwMy00NjMwLWE1NDUtOTllYWVjNzFhZWRhNjM3Mjk3MzY4MTA5OTM1NjE3",
    //     // autopop: false,
    //     // js: "https://cdn.snipcart.com/themes/v3.0.15/default/snipcart.js",
    //     // styles: "https://cdn.snipcart.com/themes/v3.0.15/default/snipcart.css",
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Etna Joyas",
        short_name: "Etna Joyas",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#FFFFFF",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "static/assets/images/logo.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/images`,
      },
    },
  ],
};
