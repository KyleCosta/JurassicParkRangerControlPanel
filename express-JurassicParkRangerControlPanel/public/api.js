const apiKey = '';
console.log('Hello world!');

async function fetchWeather() {
  const result = await fetch(`https://api.weatherbit.io/v2.0/alerts?city=Sandiego,CA&key=${apiKey}`);
  const resultJson = await result.json();
  console.log(resultJson);
  return resultJson.alerts;
}

const weatherSection = document.querySelector('#weather');

function createWeatherElement(weather) {
const newWeather = document.createElement('article');
newWeather.classList.add('severe');
newWeather.innerHTML=
`
  <h4>${weather.description}</h4>
  <article class="severe"></article>
`

console.log('weatherSection');

weatherSection.appendChild(newWeather);
}

/*createWeatherElement();*/

async function main() {
  const weather = await fetchWeather();
  weather.forEach(weather => {
    console.log(weather)
    createWeatherElement(weather);
  });;
} 

main();

/*fetchWeather();*/