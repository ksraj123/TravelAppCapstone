const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

async function getPics(city){
    const API_KEY = '16701408-83e4a78d0fabb7434ae1432ad';
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(city)}`;
    try {
      const res = await axios.get(URL)
      const data = res.data;
      return data.hits[0];
    }  catch(error) {
      console.log("error", error);
    }
  }

module.exports = getPics;