const countries = require('./data/countries.json');
const providers = require('./data/providers.json');
const config = require('./data/config.json');

module.exports = () => ({
    providers,
    countries,
    config,
});
