export const fetchContries = async (URL, requestText) => {
  try {
    const responseJSON = await fetch(`${URL}${requestText}`);
    const countries = await responseJSON.json();

    if (countries.status === 400 || countries.status === 404) throw new Error(countries.message);
    return [countries];
  } catch (err) {
    console.log('error: ', err);
    return [];
  }
};

export const getOnlyUniqCountries = (countries) => {
  const uniqCountries = [];
  countries.forEach((country) => {
    const code = country.alpha3Code || country.code;
    let isUniq = true;
    uniqCountries.forEach((uniqCountry) => {
      if ((uniqCountry.alpha3Code || uniqCountry.code) === code) {
        isUniq = false;
      }
    });
    if (isUniq) uniqCountries.push(country);
  });

  return uniqCountries;
};

export const getStructuredListOfCountries = (countries) => {
  const structuredCountries = [];
  countries.forEach((country) => {
    const structuredCountry = {
      code: country.alpha3Code || country.code,
      name: country.name,
      flag: country.flag,
      languages: country.languages,
      border_countries: country.borders,
    };
    structuredCountries.push(structuredCountry);
  });

  return structuredCountries;
};

export const getSortedListOfCountries = (countries) => {
  const sortedCountries = [...countries];
  sortedCountries.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    else return 0;
  });

  return sortedCountries;
};
