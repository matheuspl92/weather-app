const transitionLoadingToData = () => {
  const loadBox = document.getElementById('load-box');
  loadBox.classList.replace('visible', 'hidden');

  const dataBox = document.getElementById('data-box');
  dataBox.classList.replace('hidden', 'visible');

  const contentBox = document.getElementById('content-box');
  contentBox.classList.add('enlarge');
};

export default transitionLoadingToData;
