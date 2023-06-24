const { serverError,success } = require('../utils/response');
const { 
  createBlogPost,
  createBlogPostGeneric
} = require('../services/blogService');


const generateBlogPost = async (req, res) => {
  try {
    const blogPost = await createBlogPost(req.params.topic);
    return success(res,blogPost);
  } catch (err) {
    return serverError(res, err.message);
  }
};

const generateBlogPostGeneric = async (req, res) => {
  try {
    const blogPost = await createBlogPostGeneric(req.params.topic);
    return success(res,blogPost);
  } catch (err) {
    return serverError(res, err.message);
  }
};

module.exports = {
  generateBlogPost,
  generateBlogPostGeneric
};
