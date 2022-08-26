const transitionSearchToLoading = () => {
  const searchBox = document.getElementById('search-box');
  searchBox.classList.replace('visible', 'hidden');

  const loadBox = document.getElementById('load-box');
  loadBox.innerHTML = 'Loading...';
  loadBox.classList.replace('hidden', 'visible');
};

export default transitionSearchToLoading;
