var apiKey = "af4c0b1a7fe4f8aff1a2a3dea64e96c6";
var rootUrl = "https://api.openweathermap.org";
var cityName = "Detroit";
var uviEl = document.createElement("p");
var humidityEl = document.createElement("p");
var windEl = document.createElement("p");

function getOneCall() {
  fetch(`${rootUrl}/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      getWeather(data.coord);
    });
}

function getWeather(coordinates) {
  var { lat } = coordinates;
  var { lon } = coordinates;
  var apiUrl = `${rootUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}`;
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let uviReading = data.current.uvi;
      let windReading = data.current.wind_speed;
      let humidityReading = data.current.humidity;
      let todayDate = data.timezone;
      uviEl.innerText = "UVI: " + uviReading;
      humidityEl.innerText = "Humidity " + humidityReading + "%";
      windEl.innerText = "Wind MPH" + windReading;
      var resultEl = document.getElementById("weatherData");
      resultEl.append(uviEl, humidityEl, windEl);
    });
}
$("#citySearch").click(function () {
  var cityName = document.getElementById("enterCity");
  document.getElementById("weatherData").innerHTML = cityName.value;
});

getOneCall();
//getWeather();
// *build out HTML first.
//Need a form Element
//need an element that will store history of searches
//need an element where current forecast will getOneCall
//need an element with 5 day forecast
//in java, create HTML and append to the HTML element
//ie: create a card for each of the
//cityName variable will be whatever is entered by user //
