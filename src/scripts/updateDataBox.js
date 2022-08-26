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
  const weatherMainElement = document.getElementById('weather-main');
  const weatherDescElement = document.getElementById('weather-description');

  nameElement.innerHTML = data.name;
  countryElement.innerHTML = data.sys.country;
  coordinatesElement.innerHTML = `Lat: ${data.coord.lat}, Lon: ${data.coord.lon}`;

  tempNowElement.innerHTML = `${data.main.temp} ${unit}`;
  tempMaxElement.innerHTML = `${data.main.temp_max} ${unit}`;
  tempMinElement.innerHTML = `${data.main.temp_min} ${unit}`;
  humidityElement.innerHTML = `${data.main.humidity}%`;
  weatherMainElement.innerHTML = data.weather[0].main;
  weatherDescElement.innerHTML = data.weather[0].description;
};

export default updateDataBox;
