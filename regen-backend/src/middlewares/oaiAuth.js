const openai = require('openai');

const oaiAuth = (req, res, next) => {
  const apiKey = process.env['OPENAI_ORG_KEY'];
  req.openaiClient = new openai(apiKey);
  next();
}

module.exports = oaiAuth;
