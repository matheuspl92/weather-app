const transitionSearchToLoading = () => {
  const searchBox = document.getElementById('search-box');
  searchBox.classList.add('hidden');

  const loadBox = document.getElementById('load-box');
  loadBox.innerHTML = 'Loading...';
  loadBox.classList.remove('hidden');
};

export default transitionSearchToLoading;
