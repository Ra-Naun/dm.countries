import SearchFormContainer from '../../containers/SearchFormContainer';
import MainContent from './body/MainContent';
import './body.scss';
import MyFavorites from './body/MyFavorites';

const Body = () => {
  return (
    <main className='body container'>
      <div className='search-block'>
        <SearchFormContainer />
        <MainContent />
      </div>
      <MyFavorites />
    </main>
  );
};

export default Body;
