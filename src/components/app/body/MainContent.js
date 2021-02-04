import CountryInformation from './mainContent/CountryInformation';
import SearchResults from './mainContent/SearchResults';
import './mainContent.scss';

const MainContent = () => {
  return (
    <div className='main-content'>
      <p className='main-content__title title'>Main content:</p>
      <CountryInformation />
      <SearchResults />
    </div>
  );
};

export default MainContent;
