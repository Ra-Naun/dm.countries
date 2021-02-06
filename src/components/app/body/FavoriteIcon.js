import './favoriteIcon.scss';

const FavoriteIcon = ({ code, pushToFavorite, removeFromFavorite, isFavorite }) => {
  const favClick = () => {
    if (isFavorite(code)) {
      const isRemove = window.confirm('Удалить страну из сохранённых?');
      if (isRemove) removeFromFavorite(code);
    } else pushToFavorite(code);
  };

  return (
    <div className={`favorite-icon ${isFavorite(code) && 'active'}`} onClick={favClick}>
      {isFavorite(code) ? '★' : '☆'}
    </div>
  );
};

export default FavoriteIcon;
