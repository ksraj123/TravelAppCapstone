const getWeather = async (coordinates, date)=>{
    const apiKey = '586e68dd0fcc43e2861059dc1ce818a6';
    const {lng, lat} = coordinates;
    const days = (new Date() - date)/(1000 * 60 * 60 * 24);
    const currentWeather = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${apiKey}`
    const dailyForecast = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${apiKey}`;
    let requestUrl = (days <= 7)? currentWeather : dailyForecast;
    const res = await fetch(requestUrl)
    try {
      const data = await res.json();
      return data.data[0];
    }  catch(error) {
      console.log("error", error);
    }
  }

module.exports = getWeather;