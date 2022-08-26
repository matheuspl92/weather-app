import './styles/reset.css';
import './styles/common.css';
import search from './scripts/search';
import transitionDataToSearch from './scripts/transitionDataToSearch';

// API KEYS
const OPEN_WEATHER_KEY = '6cae0cb3d6b3ff316c8db6713f40ca12';

const searchForm = document.getElementsByTagName('form')[0];
const returnBtn = document.getElementById('return-btn');

searchForm.addEventListener('submit', () => {
  const formData = new FormData(searchForm);
  search(formData, OPEN_WEATHER_KEY);
});

returnBtn.addEventListener('click', () => {
  transitionDataToSearch();
});
