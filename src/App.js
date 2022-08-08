import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import StudentCard from './components/StudentCard';

function App() {
  return ( 
    // return a JSX div
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='card' element={<StudentCard name='Long'/>}/>
      </Routes>
      <br/>
    </div>
  );
}

export default App;
