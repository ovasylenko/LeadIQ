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
    title: 'nutonomy test task',
    description: 'All the modern best practices in one example.',
    head: {
      titleTemplate: 'nutonomy test task: %s',
      meta: [
        {name: 'description', content: 'nutonomy test.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'nutonomy test task'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'nutonomy test task'},
        {property: 'og:description', content: 'All the modern best practices in one example.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@ovasylenko'},
        {property: 'og:creator', content: '@ovasylenko'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
