const path = require('path');
const cors = require('cors');
const express = require('express');
const getCoordinates = require('./getCoordinates.js');
const getPics = require('./getPics.js');
const getWeather = require('./getWeather.js');
global.fetch = require("node-fetch");

const app = express();
const port = 8083;

app.use(cors());
app.use(express.json());
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

const makeApiCalls = async (city, leavingDate, res) => {
    const image = await getPics(city);
    const coordinates = await getCoordinates(city);
    const weather = await getWeather(coordinates, leavingDate);
    // console.log(weather);
    // console.log(image);

    res.json({
        weather: weather,
        image: image
    });
}

app.post('/api', function (req, res) {

    let {city, leavingDate} = req.body;
    leavingDate = JSON.parse(leavingDate);
    makeApiCalls(city, leavingDate, res);
    
})

app.listen(port, ()=>{
    console.log(`Travel app listening on port ${port}!`);
})