require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteUrl: 'https://kriskomarphotography.com',
    siteTitleAlt: 'Kris Komar Photography',
    siteHeadline: 'I\'m inspired by a melding of art and science.',
    siteDescription: 'Kris Komar Photography Portfolio website.',
    siteLanguage: 'en',
    siteImage: '/kris-komar-photography-logo-600.png',
    author: 'Kris Komar'
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: 'Kris Komar Photography, LLC',
        location: 'Kuna, ID, USA',
        showThemeAuthor: false,
        socialMedia: [
          {
            title: 'Instagram',
            href: 'https://www.instagram.com/kriskomarphotography/'
          }
        ]
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-135026740-1',
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Kris Komar Photography',
        short_name: 'Kris Komar Photography',
        description: 'I\'m inspired by a melding of art and science.',
        start_url: '/',
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
