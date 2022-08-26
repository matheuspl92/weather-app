import './styles/reset.css';
import './styles/common.css';
import search from './scripts/search';

// API KEYS
const OPEN_WEATHER_KEY = '6cae0cb3d6b3ff316c8db6713f40ca12';

const contentBox = document.getElementById('content-box');
const searchForm = document.getElementsByTagName('form')[0];
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

searchForm.addEventListener('submit', () => {
  const formData = new FormData(searchForm);
  search(formData, OPEN_WEATHER_KEY);
});
