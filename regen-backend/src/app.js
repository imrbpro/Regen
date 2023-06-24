const express = require('express');
const bodyParser = require('body-parser');
const blog = require('./routes/blogRoutes');
require('dotenv').config()
const app = express();

const port = process.env.PORT || 2023;

app.use(bodyParser.json());
app.use('/blog', blog);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
