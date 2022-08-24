import './styles/reset.css';
import './styles/common.css';
import getData from './scripts/getData.js';

// API KEYS
const OPEN_WEATHER_KEY = '6cae0cb3d6b3ff316c8db6713f40ca12';

const searchBox = document.getElementById('search-box');
const searchForm = document.getElementsByTagName('form')[0];
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

const weatherDataBox = document.getElementById('weather-data-box');

searchForm.addEventListener('submit', () => {
  console.log('SUBMITTED!');
  console.log(searchInput.value);
  getData(searchInput.value, OPEN_WEATHER_KEY).then((resolve) => {
    console.log(resolve);
  });
});
