window.onload = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Lviv&units=metric&APPID=5d066958a60d315387d9492393935c19`;

    fetch(url)
        .then(res => res.json())
        .then((data) => {
            const weather = data.main;
            const wind = data.wind;

            const html = `Weather in <b>Lviv</b> - temperature: <b> ${weather.temp} degrees </b>, 
            pressure: <b>${weather.pressure} units</b>, humidity: <b>${weather.humidity} %</b>
                wind speed: <b>${wind.speed} m/s</b>.
            `;

            document.getElementById('weather-container').innerHTML = html;
        });
    
};