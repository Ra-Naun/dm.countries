import { connect } from 'react-redux';
import { pushFavCountryByCode, removeFavCountryByCode } from '../actions/favoriteCountriesActions';
import FavoriteIcon from '../components/app/body/FavoriteIcon';
import { isFavorite } from '../selectors/selectors';

const FavoriteIconContainer = ({ pushToFavorite, removeFromFavorite, isFavorite, code }) => {
  return <FavoriteIcon code={code} pushToFavorite={pushToFavorite} removeFromFavorite={removeFromFavorite} isFavorite={isFavorite} />;
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    isFavorite: ((state) => (code) => isFavorite(state, code))(state),
    shouldComponentUpdate: state.favoriteCountries,
  };
};

const mapDispatchToProps = (dispatch) => ({
  pushToFavorite: (code) => dispatch(pushFavCountryByCode(code)),
  removeFromFavorite: (code) => dispatch(removeFavCountryByCode(code)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteIconContainer);
