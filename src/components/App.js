import './App.scss';
import Body from './app/Body';
import Header from './app/Header';
import ErrorBoundary from './ErrorBoundary.jsx';

function App() {
  return (
    <ErrorBoundary>
      <div className='app'>
        <Header />
        <Body />
      </div>{' '}
    </ErrorBoundary>
  );
}

export default App;
