import './countryInformation.scss';
import CountryShortInfo from '../CountryShortInfo';

const CountryInformation = ({ country }) => {
  const { flag_src, name, code, lang, border_countries_arr } = country;

  const template_country = (
    <>
      <img className='country-information__flag' src={flag_src} alt='flag' />
      <p className='country-information__name'>{name}</p>
      <p className='country-information__name'>{code}</p>
      <p className='country-information__name'>{lang}</p>
      <details className='border-countries'>
        <summary>Cписок граничных стран</summary>
        {border_countries_arr?.map((country, index) => {
          return (
            <>
              <p className='border-countries__num'>#{index + 1}</p>
              <CountryShortInfo country={country} />
            </>
          );
        })}
      </details>
    </>
  );

  return (
    <div className='country-information'>
      <p className='country-information__title title'>Country information:</p>
      {template_country}
    </div>
  );
};

export default CountryInformation;
