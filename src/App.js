import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( 
    // return a JSX div
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        &nbsp;
        <button className='btn btn-light' onClick={()=> window.open("https://reactjs.org",'_blank')}>Open New Page</button>
      </header>
    </div>
  );
}

export default App;
