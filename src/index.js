function citySearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-input");
  let city = searchInput.value;

  let apiKey = "t0cee57ed010o387a24333e4fba6d54e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(tempUpdate);
}

function tempUpdate(response) {
  let temperatureElement = document.querySelector(".temp");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = temperature;

  let cityElement = document.querySelector("#city");
  let city = response.data.city;
  cityElement.innerHTML = city;
}

let searchElement = document.querySelector(".search-form");
searchElement.addEventListener("submit", citySearch);
