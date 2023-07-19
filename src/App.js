
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import './App.css';

function App() {
  return (
  <div className='App'>
    <Router>
    <Header />
      <Routes>
        <Route  path='/' element={<Login/>}/>
      </Routes>

      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
  </div> 
  );
}

export default App;
