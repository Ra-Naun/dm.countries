import './countryInformation.scss';
import CountryShortInfoContainer from '../../../../containers/CountryShortInfoContainer';
import FavoriteIconContainer from '../../../../containers/FavoriteIconContainer';

const CountryInformation = ({ selectedCountry, setSelectedCountryByCode, resetSelectedCountry }) => {
  const { flag, name, code, languages, border_countries } = selectedCountry;
  const template_country = (
    <>
      <img height='15px' className='country-information__flag' src={flag} alt='flag' />
      <p className='country-information__name'>{name}</p>
      <p className='country-information__code'>{`ISO 3166-1 alpha-3:  ${code}`}</p>

      <ol className='country-information__languages'>
        <p className='country-information__languages-title'>Языки:</p>
        {languages.map((lang) => (
          <li key={lang.name} className='country-information__lang'>
            {`• ${lang.name}`}
          </li>
        ))}
      </ol>

      <details className='border-countries'>
        <summary className='border-countries__summary'>Cписок граничных стран {`[${border_countries.length}]`}</summary>
        <ol className='border-countries_list'>
          {border_countries.map((country, index) => {
            const key = country.name || country.code;
            return <CountryShortInfoContainer key={key} country={country} index={index} setSelectedCountryByCode={setSelectedCountryByCode} isClearSearchResults={true} />;
          })}
        </ol>
      </details>

      <div className='country-information__favorite'>
        <FavoriteIconContainer code={code} />
      </div>
    </>
  );

  return (
    <div className='country-information'>
      <p className='country-information__title title'>🔭 Country information:</p>
      {template_country}
    </div>
  );
};

export default CountryInformation;
