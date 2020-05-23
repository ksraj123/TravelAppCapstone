const dotenv = require('dotenv');

dotenv.config();

const getCoordinates = async (city)=>{
  const res = await fetch(`http://api.geonames.org/searchJSON?name_equals=${encodeURIComponent(city)}&maxRows=1&username=saurabhraj123`)
  try {
    const data = await res.json();
    return {
      lng: data.geonames[0].lng,
      lat: data.geonames[0].lat
    }
  }  catch(error) {
    console.log("error", error);
  }
}

module.exports = getCoordinates;


/*

API response format

{
  polarity: 'positive',
  subjectivity: 'objective',
  text: 'John is a very good football player!',
  polarity_confidence: 0.9940106272697449,
  subjectivity_confidence: 0.943706847162803
}

*/
