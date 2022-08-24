import getGeocodeData from './getGeocodeData';
import getWeatherData from './getWeatherData';

const getData = async (searchString, key) => {
  const geocodeData = await getGeocodeData(searchString, key);
  const weatherData = await getWeatherData(geocodeData, key);
  return weatherData;
};

export default getData;
