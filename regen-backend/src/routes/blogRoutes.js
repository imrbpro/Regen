const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/Generic/:topic', blogController.generateBlogPostGeneric);
router.get('/:topic', blogController.generateBlogPost);

module.exports = router;
