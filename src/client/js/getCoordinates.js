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

export { getCoordinates }

    // evt.preventDefault();
    // const zip = evt.target.elements.zip.value;
    // const feelings = evt.target.elements.feelings.value;
    // dimmer.classList.add('active');

          // const response = await fetch('/data', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({
      //       temp: data.main.temp,
      //       date: getNewDate(),
      //       zip,
      //       feelings
      //   })
      // });
      // const resJson = await response.json();
      // console.log(resJson);
      // addEntries(resJson.posts);

        // alert("incorrect US pincode, please try again");
      // appropriately handle the error
    // dimmer.classList.remove('active');
