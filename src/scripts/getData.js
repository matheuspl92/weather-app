import getGeocodeData from './getGeocodeData';
import getWeatherData from './getWeatherData';

const getData = async (formData, key) => {
  const geocodeData = await getGeocodeData(formData.get('search'), key);
  const weatherData = await getWeatherData(geocodeData, formData.get('unit'), key);
  return weatherData;
};

export default getData;
