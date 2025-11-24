console.log("hola api clima");

async function fetchWeatherData(latitud, longitud) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current_weather=true`;
    const response = await fetch(url);
    console.log(response)

    //pasear a un objeto de javascript
    const data = await response.json();
    console.log(data);
    console.log(data.elevation);
    console.log(data.current_weather);
    console.log(data.current_weather.temperature);
    return data.current_weather;
}

//fetchWeatherData(25.666815, -100.28233);

async function handleFetchClick(){
    console.log("click en el boton");
    const latitud = document.getElementById("latitude-input").value;
    const longitud = document.getElementById("longitude-input").value;
    
    const currentTemperature = document.getElementById("temp-display");
    const currentWeather = await fetchWeatherData(latitud, longitud);
    currentTemperature.textContent = currentWeather.temperature;
}