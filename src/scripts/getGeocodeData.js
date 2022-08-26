/* eslint-disable consistent-return */
const getGeocodeData = async (searchString, key) => {
  try {
    const geocodeResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchString}&limit=1&appid=${key}`, { mode: 'cors' });
    const geocodeData = await geocodeResponse.json();
    return geocodeData[0];
  } catch (error) {
    console.log('getGeocode ERROR!');
  }
};

export default getGeocodeData;
