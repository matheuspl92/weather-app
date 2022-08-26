const transitionDataToSearch = () => {
  const dataBox = document.getElementById('data-box');
  dataBox.classList.add('hidden');

  const searchBox = document.getElementById('search-box');
  searchBox.classList.remove('hidden');
};

export default transitionDataToSearch;
