
var cityFormEl = document.querySelector('#city-form');
var cityInputEl = document.querySelector('#city');

var weatherContainerEl = document.querySelector('#daily-city');
var day1ContainerEl = document.querySelector('#day1');
var day2ContainerEl = document.querySelector('#day2');
var day3ContainerEl = document.querySelector('#day3');
var day4ContainerEl = document.querySelector('#day4');
var day5ContainerEl = document.querySelector('#day5');

// Moment takes the current time
var today = moment();

//var tableBody = document.getElementById('repo-table');
//var fetchButton = document.getElementById('fetch-button');

var formSubmitHandler = function (event) {
  event.preventDefault();

  var city = cityInputEl.value.trim();

  if (city) {
    getWeather(city);

    //cityContainerEl.textContent = '';
    cityInputEl.value = '';
  } else {
    alert('Please enter a city');
  }
};

var getWeather = function (city) {
  var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.8688&lon=151.2093&units=metric&exclude=minutely,hourly,alerts&appid=20a3f1b5434cb27033931167f4082092";

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          displayWeather(data, city);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to Weather');
    });
};

var displayWeather = function (data, city) {
  if (data.length === 0) {
    return;
  }
    var cityEl = document.createElement('h1');
    cityEl.textContent = 'City: ' + city; //+ data.current.dt;

    var tempEl = document.createElement('p');
    tempEl.textContent = 'Temp: ' + data.current.temp + 'C';
    var windEl = document.createElement('p');
    windEl.textContent = 'Wind: ' + data.current.wind_speed + 'km/hr';
    var humidityEl = document.createElement('p');
    humidityEl.textContent = 'Humidity: ' + data.current.humidity + '%';
    var uviEl = document.createElement('p');
    uviEl.textContent = 'UV Index: ' + data.current.uvi;

    var forecastEl = document.createElement('h1');
    forecastEl.textContent = "5 Day Forecast:";

    weatherContainerEl.appendChild(cityEl);
    weatherContainerEl.appendChild(tempEl);
    weatherContainerEl.appendChild(windEl);
    weatherContainerEl.appendChild(humidityEl);
    weatherContainerEl.appendChild(uviEl);
    weatherContainerEl.appendChild(forecastEl);

    var day;

    for (var i = 0; i<5; i++){
      


      switch(i){
        case 0:
          var day1Temp = document.createElement('p');
          day = day1ContainerEl
          var day1Temp = document.createElement('p');
          temp = day1Temp;
          var day1Wind = document.createElement('p');
          wind = day1Wind;
          var day1Humidity = document.createElement('p');
          humidity = day1Humidity;
        break;
        case 1:
          var day2Temp = document.createElement('p');
          day = day2ContainerEl
          var day2Temp = document.createElement('p');
          temp = day2Temp;
          var day2Wind = document.createElement('p');
          wind = day2Wind;
          var day2Humidity = document.createElement('p');
          humidity = day2Humidity;
          break;
        case 2:
          var day3Temp = document.createElement('p');
          day = day3ContainerEl
          var day3Temp = document.createElement('p');
          temp = day3Temp;
          var day3Wind = document.createElement('p');
          wind = day3Wind;
          var day3Humidity = document.createElement('p');
          humidity = day3Humidity;
          break;
        case 3:
          var day4Temp = document.createElement('p');
          day = day4ContainerEl
          var day4Temp = document.createElement('p');
          temp = day4Temp;
          var day4Wind = document.createElement('p');
          wind = day4Wind;
          var day4Humidity = document.createElement('p');
          humidity = day4Humidity;
          break;
        case 4:
          var day5Temp = document.createElement('p');
          day = day5ContainerEl
          var day5Temp = document.createElement('p');
          temp = day5Temp;
          var day5Wind = document.createElement('p');
          wind = day5Wind;
          var day5Humidity = document.createElement('p');
          humidity = day5Humidity;
          break;
      }

      temp.textContent = 'Temp: ' + data.daily[i].temp.max + 'C';
      wind.textContent = 'Wind: ' + data.daily[i].wind_speed + 'km/hr';
      humidity.textContent = 'Humidity: ' + data.daily[i].humidity + '%';

      
      day.appendChild(temp);
      day.appendChild(wind);
      day.appendChild(humidity);

        


    
    }



};

cityFormEl.addEventListener('submit', formSubmitHandler);

