function cityUpdate(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-input");
  let cityInput = searchInput.value;

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = cityInput;
}

let searchElement = document.querySelector(".search-form");
searchElement.addEventListener("submit", cityUpdate);

let apiKey = "t0cee57ed010o387a24333e4fba6d54e";
console.log(apiKey);
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key={key}`;
