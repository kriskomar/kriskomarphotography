const config = require('./config/website')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
  /* General Information */
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
  },
  /* Plugins */
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            "src": "/favicons/android-icon-36x36.png",
            "sizes": "36x36",
            "type": "image/png",
            "density": "0.75"
           },
           {
            "src": "/favicons/android-icon-48x48.png",
            "sizes": "48x48",
            "type": "image/png",
            "density": "1.0"
           },
           {
            "src": "/favicons/android-icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png",
            "density": "1.5"
           },
           {
            "src": "/favicons/android-icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png",
            "density": "2.0"
           },
           {
            "src": "/favicons/android-icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png",
            "density": "3.0"
           },
           {
            "src": "/favicons/android-icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "density": "4.0"
           },
        ],
      },
    },
    /* Must be placed at the end */
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
