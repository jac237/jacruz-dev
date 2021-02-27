// const axios = require("axios");
const API_URL = 'https://jacruzdev-api.vercel.app/';
const axios = require('axios').create({
  baseURL: API_URL,
  timeout: 1000,
});

export async function getAllComments() {
  const response = await axios.get('/api/comments/all');
  return response.data;
}

export async function addComment(comment) {
  const response = await axios({
    method: 'POST',
    url: '/api/comments/add',
    data: comment,
  });
  return response.data;
}

export async function likeComment(values) {
  const response = await axios({
    method: 'PUT',
    url: '/api/comments/like',
    data: values,
  });
  return response.data;
}

export async function logError(error) {
  const response = await axios({
    method: 'POST',
    url: '/api/log/error',
    data: error,
  });
  return response.data;
}
