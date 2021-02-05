import CountryInformationContainer from '../../../containers/CountryInformationContainer';

import './mainContent.scss';
import SearchResultsContainer from '../../../containers/SearchResultsContainer';

const MainContent = () => {
  return (
    <div className='main-content'>
      <p className='main-content__title title'>Main content:</p>
      <CountryInformationContainer />
      <SearchResultsContainer />
    </div>
  );
};

export default MainContent;
