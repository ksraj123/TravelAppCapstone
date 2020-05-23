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
