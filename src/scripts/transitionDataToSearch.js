const transitionDataToSearch = () => {
  const dataBox = document.getElementById('data-box');
  dataBox.classList.replace('visible', 'hidden');

  const searchBox = document.getElementById('search-box');
  searchBox.classList.replace('hidden', 'visible');

  const contentBox = document.getElementById('content-box');
  contentBox.classList.remove('enlarge');
};

export default transitionDataToSearch;
