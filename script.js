var x = document.querySelector(".city-name");
var date = new Date();
var hour = date.getHours();

document.getElementById("btn-choice").addEventListener("click", function () {
  getWheater($("#city-input").val());
});

// Event handling for press Enter
document.getElementById("city-input").addEventListener(
  "keypress",
  function (event) {
    if (event.keyCode == 13) {
      getWheater($("#city-input").val());
      console.log("asd");
      $("#city-input").val("");
    }
  },
  false
);

function getWheater(city) {
  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric" +
      "&appid=67cf0732ed3cb63793283c1a9b7386b9",
    function (response) {
      console.log(response);
      var city2 = city;
      var country = response.sys.country;
      var wheater = response.weather[0].main;
      var temp = response.main.temp;
      var pressure = response.main.pressure;
      var windSpeed = response.wind.speed;
      console.log(
        city2 +
          " " +
          country +
          " " +
          wheater +
          " " +
          temp +
          " " +
          pressure +
          " " +
          windSpeed
      );
      wheaterSet(city2, country, wheater, temp, pressure, windSpeed);
    }
  );
}
// This module for animated background made by https://github.com/msoroka/javascript-weather-app

function wheaterSet(city, country, wheater, temp, pressure, windSpeed) {
  console.log(wheater);
  if (wheater == "Clear") {
    $("#wheater-video").html(
      "<video autoplay muted loop " +
        'id="myVideo"><source  src="videos/clearNight.mp4" type="video/mp4"></video>'
    );
  }
  if (wheater == "Clear" && hour <= 20 && hour >= 6) {
    $("#wheater-video").html(
      "<video autoplay muted loop " +
        'id="myVideo"><source  src="videos/clearDay.mp4" type="video/mp4"></video>'
    );
  }
  if (wheater == "Rain") {
    $("#wheater-video").html(
      "<video autoplay muted loop " +
        'id="myVideo"><source  src="videos/rain.mp4" type="video/mp4"></video>'
    );
  }
  if (wheater == "Clouds") {
    $("#wheater-video").html(
      "<video autoplay muted loop " +
        'id="myVideo"><source  src="videos/cloudsNight.mp4" type="video/mp4"></video>'
    );
  }
  if (wheater == "Clouds" && hour <= 20 && hour >= 6) {
    $("#wheater-video").html(
      "<video autoplay muted loop " +
        'id="myVideo"><source  src="videos/clouds.mp4" type="video/mp4"></video>'
    );
  }
  if (wheater == "Snow") {
    $("#wheater-video").html(
      "<video autoplay muted loop " +
        'id="myVideo"><source  src="videos/snow.mp4" type="video/mp4"></video>'
    );
  }
  if (wheater == "Mist") {
    $("#wheater-video").html(
      "<video autoplay muted loop " +
        'id="myVideo"><source  src="videos/mist.mp4" type="video/mp4"></video>'
    );
  }
  if (wheater == "Thunderstorm") {
    $("#wheater-video").html(
      "<video autoplay muted loop " +
        'id="myVideo"><source  src="videos/thunderstorm.mp4" type="video/mp4"></video>'
    );
  }
  $("#city-info").html(city + " " + country);
  $("#wheat-info").html(wheater);
  $("#temp-info").html(temp + " &deg;C");
  $("#pressure-info").html(pressure + " hPa");
  $("#windSpeed-info").html(windSpeed + " m/s");
  $("#wheater-info").show();
  thunderstorm;
}
