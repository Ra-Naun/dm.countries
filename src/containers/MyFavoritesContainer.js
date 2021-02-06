import { connect } from 'react-redux';
import MyFavorites from '../components/app/body/MyFavorites';
import { setSelectedCountryByCode } from '../actions/selectedCountryActions';
import { pushFavCountryByCode, removeFavCountryByCode } from '../actions/favoriteCountriesActions';
import { getFavCountries, isFavorite } from '../selectors/selectors';

const MyFavoritesContainer = ({ favCountries, setSelectedCountryByCode, pushToFavorite, removeFromFavorite, isFavorite, shouldComponentUpdate }) => {
  return (
    <MyFavorites favCountries={favCountries} setSelectedCountryByCode={setSelectedCountryByCode} pushToFavorite={pushToFavorite} removeFromFavorite={removeFromFavorite} isFavorite={isFavorite} />
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    isFavorite: ((state) => (code) => isFavorite(state, code))(state),
    favCountries: getFavCountries(state),
    shouldComponentUpdate: state.favoriteCountries,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setSelectedCountryByCode: (code) => dispatch(setSelectedCountryByCode(code)),
  pushToFavorite: (code) => dispatch(pushFavCountryByCode(code)),
  removeFromFavorite: (code) => dispatch(removeFavCountryByCode(code)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyFavoritesContainer);
