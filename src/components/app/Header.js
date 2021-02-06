import logo from '../../assets/imgs/logo.svg';
import './header.scss';

const Header = () => {
  return (
    <header className='app__header'>
      <img className='app__logo' src={logo} alt='logo' />
      <p className='app__title title'>Search countries</p>
    </header>
  );
};
export default Header;
