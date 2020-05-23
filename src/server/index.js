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
    try{
        const image = await getPics(city);
        const coordinates = await getCoordinates(city);
        const weather = await getWeather(coordinates, leavingDate);
        res.json({
            weather: weather,
            image: image
        });
    } catch(err){
        res.json({
            weather: {
                app_max_temp: "Invalid City",
                app_min_temp: "Invalid City",
                snow: "Invalid City",
                wind_spd: "Invalid City",
                precip: "Invalid City"
            },
            image: {
                webformatURL: "Invalid"
            }
        })
    }
}

app.post('/api', function (req, res) {

    let {city, leavingDate} = req.body;
    leavingDate = JSON.parse(leavingDate);
    makeApiCalls(city, leavingDate, res);
    
})

app.listen(port, ()=>{
    console.log(`Travel app listening on port ${port}!`);
})