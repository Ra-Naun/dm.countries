import './countryShortInfo.scss';
import Spinner from '../../Spinner.jsx';
import FavoriteIconContainer from '../../../containers/FavoriteIconContainer';

const CountryShortInfo = ({ lazzyLoadByCode, country, setSelectedCountryByCode, index, clearSearchResults, isClearSearchResults = false }) => {
  const { flag, name, code, needLoaded } = country;

  const onClick = () => {
    setSelectedCountryByCode(code);
    if (isClearSearchResults) {
      clearSearchResults();
    }
  };

  if (needLoaded) {
    lazzyLoadByCode(code);
  }

  const templateonLoadedCountry = (
    <li className='country-short-info'>
      <div className='country-short-info__wrapper'>
        <div className='country-short-info__wrapper' onClick={onClick}>
          <p className='country-short-info__num'>➣ {index + 1}</p>
          <img height='15px' className='country-short-info__flag' src={flag} alt='flag' />
          <p className='country-short-info__name'>{name}</p>
        </div>
        <div className='country-short-info__favorite'>
          <FavoriteIconContainer code={code} />
        </div>
      </div>
      <hr className='short-country-hr' />
    </li>
  );

  const template_LoadingCountry = (
    <li className='country-short-info'>
      <div className='country-short-info__wrapper'>
        <p className='country-short-info__num'>➣ {index + 1}</p>
        <p className='country-short-info__name'>{code}</p>
        <Spinner />
      </div>
      <hr className='short-country-hr' />
    </li>
  );

  return needLoaded ? template_LoadingCountry : templateonLoadedCountry;
};

export default CountryShortInfo;
