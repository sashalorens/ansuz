import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// eslint-disable-next-line react/prop-types
function App({ children }) {
  return (
    <>
      <div className='bg-blue-500 text-white p-4'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {children}
    </>
  );
}

export default App;
