const axios = require('axios');

exports.analyzeComplaint = async (text) => {
  return axios.post('http://localhost:8000/analyze', { text });
};
