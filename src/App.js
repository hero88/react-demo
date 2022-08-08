import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Uncontrolled from './components/Uncontrolled';
import Controlled from './components/Controlled';

function App() {
  return ( 
    // return a JSX div
    <div className="App">
      <a href='/'>
        <img src={logo} className="App-logo" alt="logo" />
      </a> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='controlled' element={<Controlled/>}/>
        <Route path='uncontrolled' element={<Uncontrolled/>}/>
      </Routes>
      <br/>
    </div>
  );
}

export default App;
