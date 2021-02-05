import './countryShortInfo.scss';
import Spinner from '../../Spinner.jsx';

const CountryShortInfo = ({ lazzyLoadByCode, country, setSelectedCountryByCode, index, clearSearchResults, isClear = false }) => {
  const { flag, name, code, needLoaded } = country;

  const onClick = () => {
    setSelectedCountryByCode(code);
    if (isClear) {
      console.log('||| isClear');
      clearSearchResults();
    }
  };

  if (needLoaded) {
    lazzyLoadByCode(code);
  }

  const templateonLoad = (
    <li className='country-short-info' onClick={onClick}>
      <p className='country-short-info__num'>➣ {index + 1}</p>
      <img height='15px' className='country-short-info__flag' src={flag} alt='flag' />
      <p className='country-short-info__name'>{name}</p>
    </li>
  );

  const template_LoadedCountry = (
    <li className='country-short-info'>
      <p className='country-short-info__num'>➣ {index + 1}</p>
      <p className='country-short-info__name'>{code}</p>
      <Spinner />
    </li>
  );

  return needLoaded ? template_LoadedCountry : templateonLoad;
};

export default CountryShortInfo;
