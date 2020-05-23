import { validateCity } from "./validateCity";
import { validateDate } from "./validateDate";

function createRowFordisplay(...args){
    let div = document.createElement('div');
    div.classList.add('rows');
    for (let val of args){
        let child = document.createElement('span');
        child.innerText = val;
        div.appendChild(child);
    }
    return div;
}

async function handleSubmit(event) {
    event.preventDefault()
    
    const dateArr = event.target.elements.leavingDate.value.split(/\D/);
    const leavingDate = new Date(dateArr[0], --dateArr[1], dateArr[2]);

    if (new Date() < leavingDate){
        // do some thing, validation
    }
    // console.log(leavingDate);
    const city = document.getElementById('city').value

    if (!validateCity(city)){
        alert("Invalid City name");
        return;
    }

    if (!validateDate(leavingDate)){
        alert("Leaving date must be in future!");
        return;
    }

    const dimmer = document.querySelector('.ui.dimmer');
    dimmer.classList.add('active');
    
    const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          city: city,
          leavingDate: JSON.stringify(leavingDate),
      })
    });

    const data = await response.json();
    document.querySelector('#image').style.background = `url(${data.image.webformatURL})`;
    // console.log(data.weather);

    let fragment = document.createDocumentFragment();
    fragment.appendChild(createRowFordisplay("Temp", data.weather.app_max_temp, data.weather.app_min_temp));
    fragment.appendChild(createRowFordisplay("Snow", data.weather.snow));
    fragment.appendChild(createRowFordisplay("Wind", data.weather.wind_spd));
    fragment.appendChild(createRowFordisplay("Rain", data.weather.precip));

    document.querySelector("#result").innerHTML="";
    document.querySelector("#result").appendChild(fragment);
    dimmer.classList.remove('active');
}

export { handleSubmit }


/* 
app_max_temp: 19.2
app_min_temp: 14.5
clouds: 58
clouds_hi: 23
clouds_low: 18
clouds_mid: 36
datetime: "2020-05-23"
dewpt: 4.5
high_temp: 20.1
low_temp: 10.1
max_dhi: null
max_temp: 20.3
min_temp: 14.5
moon_phase: 0.013009
moon_phase_lunation: 0.01
moonrise_ts: 1590206540
moonset_ts: 1590266028
ozone: 346.372
pop: 0
precip: 0
pres: 1022.65
rh: 41
slp: 1028.1
snow: 0
snow_depth: 0
sunrise_ts: 1590206069
sunset_ts: 1590262860
temp: 18.1
ts: 1590184860
uv: 4.47384
valid_date: "2020-05-23"
vis: 0
weather: {icon: "c03d", code: 803, description: "Broken clouds"}
wind_cdir: "WNW"
wind_cdir_full: "west-northwest"
wind_dir: 286
wind_gust_spd: 13.2215
wind_spd: 4.31896
*/