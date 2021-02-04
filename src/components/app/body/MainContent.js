import CountryInformationContainer from '../../../containers/CountryInformationContainer';
import SearchResults from './mainContent/SearchResults';
import './mainContent.scss';

const MainContent = () => {
  return (
    <div className='main-content'>
      <p className='main-content__title title'>Main content:</p>
      <CountryInformationContainer />
      <SearchResults />
    </div>
  );
};

export default MainContent;
