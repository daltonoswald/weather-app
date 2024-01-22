import { format } from 'date-fns';
import './styles.css';

const body = document.querySelector('body');
const newCityBtn = document.getElementById('newCity');
// const unitToggle = document.getElementById('unitToggle');
format(new Date(1, 11, 2014), 'MM-dd-yyyy');

async function getWeather() {
  let search = document.getElementById('search').value;
  if (search === '') {
    search = 'pittsburgh';
  }
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=aa0ef9be1aa2424cb66162618231609&q=${search}&days=3`);
  const weatherData = await response.json();
  console.log(weatherData);

  const currentCity = document.getElementById('city');
  currentCity.textContent = `${weatherData.location.name}, ${weatherData.location.region}`;

  const currentDate = document.getElementById('currentDate');
  currentDate.textContent = format(new Date(`${weatherData.location.localtime}`), 'MM/dd/yyyy');

  const currentCondition = document.getElementById('currentCondition');
  currentCondition.textContent = `${weatherData.current.condition.text}`;

  const currentConditionIcon = document.getElementById('currentConditionIcon');
  currentConditionIcon.src = weatherData.current.condition.icon;

  const currentTemperature = document.getElementById('currentTemperature');
  currentTemperature.textContent = `It's currently ${weatherData.current.temp_f} °F`;
  if (weatherData.current.temp_f >= '72') {
    body.classList.add('hot');
    body.classList.remove('cold');
  } else {
    body.classList.add('cold');
    body.classList.remove('hot');
  }

  const currentHumidity = document.getElementById('currentHumidity');
  currentHumidity.textContent = `Humidity ${weatherData.current.humidity}%`;

  const day2Date = document.getElementById('day2Date');
  day2Date.textContent = format(new Date(`${weatherData.forecast.forecastday[1].date}`), 'EEEE');

  const day2ConditionIcon = document.getElementById('day2ConditionIcon');
  day2ConditionIcon.src = weatherData.forecast.forecastday[1].day.condition.icon;

  const day2Condition = document.getElementById('day2Condition');
  day2Condition.textContent = weatherData.forecast.forecastday[1].day.condition.text;

  const day2High = document.getElementById('day2High');
  day2High.textContent = `${weatherData.forecast.forecastday[1].day.maxtemp_f} °F`;

  const day2Low = document.getElementById('day2Low');
  day2Low.textContent = `${weatherData.forecast.forecastday[1].day.mintemp_f} °F`;

  const day3Date = document.getElementById('day3Date');
  day3Date.textContent = format(new Date(`${weatherData.forecast.forecastday[2].date}`), 'EEEE');

  const day3ConditionIcon = document.getElementById('day3ConditionIcon');
  day3ConditionIcon.src = weatherData.forecast.forecastday[2].day.condition.icon;

  const day3Condition = document.getElementById('day3Condition');
  day3Condition.textContent = weatherData.forecast.forecastday[2].day.condition.text;

  const day3High = document.getElementById('day3High');
  day3High.textContent = `${weatherData.forecast.forecastday[2].day.maxtemp_f} °F`;

  const day3Low = document.getElementById('day3Low');
  day3Low.textContent = `${weatherData.forecast.forecastday[2].day.mintemp_f} °F`;
}

// function toggleUnits() {
//   if (unitToggle.value === 'f') {
//     unitToggle.value = 'c';
//     unitToggle.textContent = 'C';
//   } else if (unitToggle.value === 'c') {
//     unitToggle.value = 'f';
//     unitToggle.textContent = 'F';
//   }
// }

newCityBtn.addEventListener('click', getWeather);
// unitToggle.addEventListener('click', toggleUnits);
document.getElementById('search').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    getWeather();
  }
});

getWeather();
