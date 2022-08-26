const updateDataBox = (data, formData) => {
  let unit = '';
  // eslint-disable-next-line no-unused-expressions
  (formData.get('unit') === 'metric') ? unit = '°C' : unit = '°F';

  const nameElement = document.getElementById('name');
  const countryElement = document.getElementById('country');
  const coordinatesElement = document.getElementById('coordinates');

  const tempNowElement = document.getElementById('temp-now');
  const tempMaxElement = document.getElementById('temp-max');
  const tempMinElement = document.getElementById('temp-min');
  const humidityElement = document.getElementById('humidity');
  const weatherImgElement = document.getElementById('weather-img');
  const weatherMainElement = document.getElementById('weather-main');
  const weatherDescElement = document.getElementById('weather-description');

  nameElement.innerHTML = data.name;
  countryElement.innerHTML = `Country code: ${data.sys.country}`;
  coordinatesElement.innerHTML = `Latitude: ${data.coord.lat}, Longitude: ${data.coord.lon}`;

  tempNowElement.innerHTML = `${data.main.temp} ${unit}`;
  tempMaxElement.innerHTML = `Maximum: ${data.main.temp_max} ${unit}`;
  tempMinElement.innerHTML = `Minimum: ${data.main.temp_min} ${unit}`;
  humidityElement.innerHTML = `Humidity: ${data.main.humidity}%`;
  weatherImgElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  weatherMainElement.innerHTML = data.weather[0].main;
  weatherDescElement.innerHTML = data.weather[0].description;
};

export default updateDataBox;
