import React from 'react';
import { Route, Routes } from "react-router-dom";
import './default.scss';
import Home from './pages/Home/Home';
import Registration from './pages/Auth/Registration';
import MainLayout from './Layouts/MainLayout';
import HomeLayout from './Layouts/HomeLayout';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route 
          exact path="/" 
          element={
          <HomeLayout>
            <Home/>
          </HomeLayout>} 
          />
          <Route exact path="/registration"  
          element={
          <MainLayout>
            <Registration/>
          </MainLayout>} 
          /> 
        </Routes>
    </div>
  );
}

export default App;
