const getCoordinates =  require('./getCoordinates.js');
const axios = require('axios');

jest.mock('axios');

test("testing api call to geonames", async function (){
    axios.get.mockResolvedValue({
        data: {
          geonames: [
            {
              lng: "test-lng",
              lat: "test-lat"
            }
          ]
        }
    })
    let lnl = await getCoordinates('paris');
    expect(lnl).toEqual({
      lng: "test-lng",
      lat: "test-lat"
    });
})