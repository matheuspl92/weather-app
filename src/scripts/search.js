import getData from './getData';
import transitionLoadingToData from './transitionLoadingToData';
import transitionSearchToLoading from './transitionSearchToLoading';
import updateDataBox from './updateDataBox';

const search = (formData, key) => {
  transitionSearchToLoading();
  getData(formData, key).then((resolve) => {
    console.log(resolve);
    transitionLoadingToData();
    updateDataBox(resolve, formData);
  });
};

export default search;
