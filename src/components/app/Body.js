import SearchForm from './body/SearchForm';
import MainContent from './body/MainContent';
import './body.scss';
import MyFavorites from './body/MyFavorites';

const Body = () => {
  return (
    <main className='body container'>
      <div className='search-block'>
        <SearchForm
          search={(requestText) => {
            console.log(requestText);
          }}
          classes={'search-countries'}
          role={'Search countries'}
        />
        <MainContent />
      </div>
      <MyFavorites />
    </main>
  );
};

export default Body;
