const getWeatherData = async (geoData, key) => {
  try {
    const weatherDataResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoData.lat}&lon=${geoData.lon}&units=metric&appid=${key}`, { mode: 'cors' });
    const weatherData = await weatherDataResponse.json();
    return weatherData;
  } catch (error) {
    console.log('getWeatherData ERROR!');
  }
};

export default getWeatherData;
