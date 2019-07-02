const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Kris Komar Photography', // Navigation and Site Title
  siteTitleAlt: 'Komar', // Alternative Site title for SEO
  siteTitleShort: 'Komar', // short_name for manifest
  siteHeadline: 'I\'m inspired by a melding of art and science.', // Headline for schema.org JSONLD
  siteUrl: 'https://kriskomarphotography.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'I\'m inspired by a melding of art and science.',
  author: 'Kris Komar', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@KrisKomar', // Twitter Username
  ogSiteName: 'kristopher.komar', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-135026740-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
}
