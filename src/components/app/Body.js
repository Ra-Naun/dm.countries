import SearchFormContainer from '../../containers/SearchFormContainer';
import MainContent from './body/MainContent';
import './body.scss';
import MyFavoritesContainer from '../../containers/MyFavoritesContainer';
import MainContentContainer from '../../containers/MainContentContainer';

const Body = () => {
  return (
    <main className='body container'>
      <div className='search-block'>
        <SearchFormContainer />
        <MainContentContainer />
      </div>
      <MyFavoritesContainer />
    </main>
  );
};

export default Body;
