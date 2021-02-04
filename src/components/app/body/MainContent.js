import CountryInformationContainer from '../../../containers/CountryInformationContainer';
import SearchResults from './mainContent/SearchResults';
import './mainContent.scss';

const MainContent = ({ selectedCountry }) => {
  return (
    <div className='main-content'>
      <p className='main-content__title title'>Main content:</p>
      {selectedCountry && <CountryInformationContainer selectedCountry={selectedCountry} />}
      <SearchResults />
    </div>
  );
};

export default MainContent;
