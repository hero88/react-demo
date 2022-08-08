import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/ClassComponent';
import Hello from './components/FunctionalComponent';

function App() {
  return ( 
    // return a JSX div
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Welcome name='Long' />
      <Hello/>
    </div>
  );
}

export default App;
