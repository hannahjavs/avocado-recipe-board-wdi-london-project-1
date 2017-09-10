const port = process.env.PORT || 3000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/avocado';
const secret = process.env.SESSION_SECRET || 'ssh it\'s a secret'; // secret is added in here

module.exports = { port, dbURI, secret };
