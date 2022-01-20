import React from 'react';
import './default.scss';
import Header from './components/Header';
import Home from './pages/Home/Home';


function App() {
  return (
    <div className="App">
       <Header/>
      <div className='main_content'>
     
      <Home/>
      </div>
    </div>
  );
}

export default App;
