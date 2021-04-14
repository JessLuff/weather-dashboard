
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

var formSubmitHandler = function (event) {
  event.preventDefault();

  var city = cityInputEl.value.trim();

  if (city) {
    getLocation(city);
    cityInputEl.value = '';
  } else {
    alert('Please enter a city');
  }
};

var getLocation = function (city) {
  var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=20a3f1b5434cb27033931167f4082092";

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          city = data[0].name;
          var lat = data[0].lat;
          var lon = data[0].lon;
          getWeather(city, lat, lon);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to Weather');
    });
};

var getWeather = function (city, lat, lon) {
  var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=metric&exclude=minutely,hourly,alerts&appid=20a3f1b5434cb27033931167f4082092";

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
    var iconEl = document.createElement('img');
    iconEl.setAttribute( 'src', 'http://openweathermap.org/img/wn/' + data.current.weather[0].icon + '@2x.png')
    iconEl.setAttribute('style', 'float:right');

    weatherContainerEl.appendChild(cityEl);
    weatherContainerEl.appendChild(iconEl);

    var tempEl = document.createElement('p');
    tempEl.textContent = 'Temp: ' + data.current.temp + 'C';
    var windEl = document.createElement('p');
    windEl.textContent = 'Wind: ' + data.current.wind_speed + 'km/hr';
    var humidityEl = document.createElement('p');
    humidityEl.textContent = 'Humidity: ' + data.current.humidity + '%';
    var uviEl = document.createElement('p');
    var uviRating = data.current.uvi;
    uviEl.textContent = 'UV Index: ' + uviRating;
    if(uviRating <3 ){
      uviEl.setAttribute('style','color:green');
    }
    else if (uviRating <8){
      uviEl.setAttribute('style','color:yellow');
    }
    else {
      uviEl.setAttribute('style','color:red');
    }


    var forecastEl = document.createElement('h1');
    forecastEl.textContent = "5 Day Forecast:";


    weatherContainerEl.appendChild(tempEl);
    weatherContainerEl.appendChild(windEl);
    weatherContainerEl.appendChild(humidityEl);
    weatherContainerEl.appendChild(uviEl);
    weatherContainerEl.appendChild(forecastEl);

    var day;

    for (var i = 0; i<5; i++){
      


      switch(i){
        case 0:
          var day1Icon = document.createElement('img');
          icon = day1Icon;
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
          var day2Icon = document.createElement('img');
          icon = day2Icon;
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
          var day3Icon = document.createElement('img');
          icon = day3Icon;
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
          var day4Icon = document.createElement('img');
          icon = day4Icon;
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
          var day5Icon = document.createElement('img');
          icon = day5Icon;
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

      icon.setAttribute( 'src', 'http://openweathermap.org/img/wn/' + data.daily[i].weather[0].icon + '@2x.png')
      temp.textContent = 'Temp: ' + data.daily[i].temp.max + 'C';
      wind.textContent = 'Wind: ' + data.daily[i].wind_speed + 'km/hr';
      humidity.textContent = 'Humidity: ' + data.daily[i].humidity + '%';

      
      day.appendChild(temp);
      day.appendChild(wind);
      day.appendChild(humidity);
      day.appendChild(icon);

        


    
    }



};

cityFormEl.addEventListener('submit', formSubmitHandler);

