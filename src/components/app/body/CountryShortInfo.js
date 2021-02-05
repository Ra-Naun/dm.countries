import './countryShortInfo.scss';

const CountryShortInfo = ({ country, index }) => {
  const { flag, name } = country;

  const template_country = (
    <li className='country-short-info'>
      <p className='country-short-info__num'>➣ </p>
      <img height='15px' className='country-short-info__flag' src={flag} alt='flag' />
      <p className='country-short-info__name'>{name}</p>
    </li>
  );

  return template_country;
};

export default CountryShortInfo;
