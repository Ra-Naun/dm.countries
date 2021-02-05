import './searchResults.scss';
import CountryShortInfo from '../CountryShortInfo';
import Spinner from '../../../Spinner';

const SearchResults = ({ searchedCountries, setSelectedCountryByCode, resetSelectedCountry }) => {
  const { isFetching, error, countries } = searchedCountries;

  const templateCountries = searchedCountries ? (
    <ol className='search-results__countries'>
      {countries.map((country, index) => (
        <CountryShortInfo key={country.code} country={country} index={index} />
      ))}
    </ol>
  ) : null;

  const templateError = (
    <>
      <p class='search-results__error'>{error}</p>
    </>
  );

  const templateFetching = (
    <>
      <div class='search-results__fetching'>
        <Spinner />
      </div>
    </>
  );

  const renderTemplate = isFetching ? templateFetching : error ? templateError : templateCountries;

  return (
    <div className='search-results'>
      <p className='search-results__title title'>Search results {'[' + countries.length + ']'}:</p>

      {renderTemplate}
    </div>
  );
};

export default SearchResults;
