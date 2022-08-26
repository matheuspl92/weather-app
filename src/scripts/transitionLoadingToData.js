const transitionLoadingToData = () => {
  const loadBox = document.getElementById('load-box');
  loadBox.classList.add('hidden');

  const dataBox = document.getElementById('data-box');
  dataBox.classList.remove('hidden');
};

export default transitionLoadingToData;
