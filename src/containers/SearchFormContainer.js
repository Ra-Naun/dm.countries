import { connect } from 'react-redux';
import SearchForm from '../components/app/body/SearchForm';
import { searchCountries } from '../actions/searchedCountriesActions';

const SearchFormContainer = ({ search }) => {
  return <SearchForm search={search} classes={'search-countries'} role={'Search countries'} />;
};

const mapDispatchToProps = (dispatch) => ({
  search: (requestText) => dispatch(searchCountries(requestText)),
});

export default connect(null, mapDispatchToProps)(SearchFormContainer);
