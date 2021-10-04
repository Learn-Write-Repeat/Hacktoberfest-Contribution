let city = document.getElementById('city');
let searchBtn = document.getElementById('search');
let output = document.querySelector('.output');
let details = document.getElementById('details');
let degree = document.getElementById('degree');
let wind = document.getElementById('wind');
let icon = document.getElementById('icon');

searchBtn.addEventListener('click', () =>{
    
    let word = city.value;

    // if empty value paas
    if(word === ''){
        alert('Please enter the City name.')
        return;
    }

    // Call API to get weather details
    weather(word);
})

async function weather(word) {

    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=8b370993749a4de697d52130211308&q=${word}&aqi=no`);
    const data = await  response.json();
    // console.log(data);

    if(data.error) {
        alert('Please Enter the Correct City name');
        return;
    }

    output.style.display = 'block';

    details.innerText = `${data.location.name}, ${data.location.region}, ${data.location.country}`

    degree.innerText = `${data.current.temp_c}`;
    let sup = document.createElement('sup');
    sup.innerText = 'o';
    degree.appendChild(sup);

    wind.innerText = data.current.wind_kph;
    wind.innerText += ' kph';
    icon.setAttribute('src', `${data.current.condition.icon}`);


}