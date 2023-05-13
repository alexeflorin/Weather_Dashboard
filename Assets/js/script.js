
var currentDate = dayjs().format('MMM D, YYYY, h:mm:ss a');

var curentWeather
var apiKey ="81e825ad1581e700cda654d2fba90839";
// to get city names display
var searchCity = function (cityNames){
    fetch('https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid=${apisKey}')
    .then(function (response) {
        return response.json();
      })
}
    .then(function(response){
        var currentWeather=$("#current-weather-column");
        currentWeather.addClass("current-weather-column");
        currentCityName=$("#city-name");
        currentDate=dayjs().format('MMM D, YYYY, h:mm:ss a');
    }


    )
// city search
var myString = ""; 
var myNull = null;
    var cityName=$("#search-city").val();
    {

    }
