const { api } = require('../services/api');

exports.getAllPosts = () => api.get('/posts')
