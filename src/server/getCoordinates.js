const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

async function getCoordinates (city) {
  try {
    const res = await axios.get(`http://api.geonames.org/searchJSON?name_equals=${encodeURIComponent(city)}&maxRows=1&username=saurabhraj123`);
    const data = res.data;
    return {
      lng: data.geonames[0].lng,
      lat: data.geonames[0].lat
    }
  }  catch(error) {
    console.log("error", error);
  }
}

module.exports = getCoordinates; 
