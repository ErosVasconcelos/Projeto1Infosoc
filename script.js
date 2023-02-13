let recifeURL = `https://api.openweathermap.org/data/2.5/weather?q=Recife&appid=f0a3bc13a5bd473e40015245b3a2e981&units=metric&lang=pt_br`

let recifeDados = async()=> {
    let results = await fetch(recifeURL)
    let json = await results.json();
    // console.log(json)
    if(json.cod === 200){
        mostrarDados({
            name: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            temIcon: json.weather[0].icon,
            windSpeed: json.wind.speed,
            windAngle: json.wind.deg,
        })
    }
}

function mostrarDados(json){
    document.querySelector('.resultado').style.display = 'block';
    document.querySelector('.titulo').innerHTML = json.name + ', ' + json.country;
    document.querySelector('.tempInfo').innerHTML = ` ${json.temp} <sup> ºC </sup> `;
    document.querySelector('.ventoInfo').innerHTML = ` ${json.windSpeed} <span> km/h </span> `

    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.temIcon}@2x.png`)

    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle- 90}deg)`
}

recifeDados()


var map = L.map('map').setView([-8.0535802, -34.9087328], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);