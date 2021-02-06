import { useEffect, useState } from 'react';
import CountryShortInfoContainer from '../../../containers/CountryShortInfoContainer';
import './myFavorites.scss';

const MyFavorites = ({ favCountries, setSelectedCountryByCode, pushToFavorite, removeFromFavorite, isFavorite }) => {
  const [isLoadedFavContries, setIsLoadedFavContries] = useState(false);

  useEffect(() => {
    const cachedFavContries = localStorage.getItem('favCountries').split(',');
    const isEmpty = cachedFavContries[0]?.length === 0;
    if (!isEmpty) {
      cachedFavContries.forEach((country) => {
        const parseCountry = JSON.parse(country);
        if (!isFavorite(parseCountry.code)) pushToFavorite(parseCountry.code);
      });
    }
    setIsLoadedFavContries(true);
  }, []);

  useEffect(() => {
    const OnlyCodeFavContries = favCountries.map((country) => {
      return JSON.stringify({ code: country.code });
    });

    if (isLoadedFavContries) localStorage.setItem('favCountries', OnlyCodeFavContries || []);
  }, [favCountries]);

  const templateCountries = (
    <ol className='favorite-countries_list'>
      {favCountries.map((country, index) => {
        const key = country.name || country.code;
        return <CountryShortInfoContainer key={key} country={country} index={index} setSelectedCountryByCode={setSelectedCountryByCode} isClearSearchResults={true} />;
      })}
    </ol>
  );

  const templateNoData = (
    <div className='my-favorites__nodata'>
      <p className='my-favorites__message'>Вы еще не добавили ни одну страну...</p>
    </div>
  );

  const renderTemplate = favCountries.length ? templateCountries : templateNoData;

  return (
    <div className='my-favorites'>
      <p className='my-favorites__title title'>★ My favorites:</p>
      {renderTemplate}
    </div>
  );
};

export default MyFavorites;
