import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import cogoToast from 'cogo-toast';
import './searchForm.scss';

const SearchForm = ({ search, classes, role }) => {
  const [searchText, setSearchText] = useState('');
  const [isError, setIsError] = useState(false);
  const inputRef = useRef(null);

  const searchhBtnClick = (e) => {
    e.preventDefault();
    if (!isError && searchText.length > 0) search(searchText);
    else cogoToast.error('Введите коректное название');
  };

  const handleOnChange = (e) => {
    const countryName = e.target.value;
    setSearchText(countryName);
    const reg = /^[a-zA-Z]+$/;
    if (reg.test(countryName) || countryName.length === 0) setIsError(false);
    else setIsError(true);
  };

  useEffect(() => {
    isError && cogoToast.warn('Только общепринятое англофицированное название');
  }, [isError]);

  return (
    <form action='' className={'search-form ' + classes}>
      <div className='wrapper'>
        <input
          className={`input ${classNames({ isError })}`}
          ref={inputRef}
          type='search'
          id='search-country'
          name='q'
          placeholder={role}
          value={searchText}
          aria-label={role}
          onChange={handleOnChange}
        ></input>
        <button className='SF-search-btn btn' title='search...' onClick={searchhBtnClick}>
          <i className='fa fa-search' aria-hidden='true'></i>
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
