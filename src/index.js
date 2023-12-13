function citySearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-input");
  let city = searchInput.value;

  citySelect(city);
}

function citySelect(city) {
  let apiKey = "t0cee57ed010o387a24333e4fba6d54e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(update);
}

function update(response) {
  let temperatureElement = document.querySelector(".temp");
  let temperature = Math.round(response.data.temperature.current);

  let cityElement = document.querySelector("#city");
  let city = response.data.city;

  let conditionElement = document.querySelector("#cond");
  let condition = response.data.condition.description;

  let windElement = document.querySelector("#wind");
  let wind = response.data.wind.speed;

  let humidityElement = document.querySelector("#humidity");
  let humidity = response.data.temperature.humidity;

  let timeElement = document.querySelector("#date");
  let date = new Date(response.data.time * 1000);

  temperatureElement.innerHTML = temperature;
  cityElement.innerHTML = city;
  conditionElement.innerHTML = condition;
  windElement.innerHTML = `${wind} km/h`;
  humidityElement.innerHTML = `${humidity}%`;
  timeElement.innerHTML = dateFormat(date);
}

function dateFormat(date) {
  let hour = date.getHours();
  let minute = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  if (minute < 10) {
    minute = `0${minute}`;
  }

  return `${day} ${hour}:${minute}`;
}

let searchElement = document.querySelector(".search-form");
searchElement.addEventListener("submit", citySearch);

citySelect("Boston");
