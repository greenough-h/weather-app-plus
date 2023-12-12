function citySearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-input");
  let city = searchInput.value;

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

  temperatureElement.innerHTML = temperature;
  cityElement.innerHTML = city;
  conditionElement.innerHTML = condition;
  windElement.innerHTML = `${wind} km/h`;
  humidityElement.innerHTML = `${humidity}%`;
}

let searchElement = document.querySelector(".search-form");
searchElement.addEventListener("submit", citySearch);
