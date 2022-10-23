const apiKey = `4d599bfc9deea4593d8088583cdf932f`;

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const location = document.querySelector('.location');
    const weatherStatus = document.querySelector('.weather_status');

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(url).then(response => response.json()).then(data => {
        console.log(data);
        location.innerText = data.name;
        weatherStatus.innerText = `${data.weather[0].main} / ${data.main.temp}°`;
    })

}

function onGeoError() {
    alert('위치를 찾을 수 없어요!')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);