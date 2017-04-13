require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Square One Labs: Next Generation Messaging',
    description: 'We’re a technology company building frictionless messaging products to help you access services you’ll love.',
    head: {
      titleTemplate: 'Square One Labs: Next Generation Messaging- %s',
      meta: [
        {name: 'description', content: 'We’re a technology company building frictionless messaging products to help you access services you’ll love.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Square One Labs: Next Generation Messaging'},
        {property: 'og:image', content: 'https://friend-landing-page-staging.herokuapp.com/logo.png'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Square One Labs: Next Generation Messaging'},
        {property: 'og:description', content: 'We’re a technology company building frictionless messaging products to help you access services you’ll love.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: ''},
        {property: 'og:creator', content: ''},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
