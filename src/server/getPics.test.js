const getPics =  require('./getPics.js');
const axios = require('axios');

jest.mock('axios');

test("testing api call to pixbay", async function (){
    axios.get.mockResolvedValue({
        data: {
          hits: [
            {
                webformatURL: "testing"
            }
          ]
        }
    })
    let image = await getPics('paris');
    expect(image).toEqual({
        webformatURL: "testing"
    });
})