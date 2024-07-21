import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomeSection from './Components/HomeSection';
import Kwizines from './Components/Kwizines';
import Searched from './Components/Searched';
import Explore from './Components/Explore'; 
import Footer from './Components/Footer';
import DetailedRecipe from './Components/DetailedRecipe';

function App() {
return (
  <BrowserRouter>
  <div className='App'>
  <NavBar />
    <div className="container main">
    <Routes>
      <Route path='/' element={<HomeSection />} />
        <Route path='/explore' element={<Explore />} /> 
        <Route path='/kwizine/:type' element={<Kwizines />} /> 
        <Route path='/searched/:search' element={<Searched/>}/>
        <Route path='/recipeInfo/:name' element={<DetailedRecipe/>}/>
      </Routes>
       
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       
        <br></br>
        <br></br>
        <Footer/>
              </div>
    </BrowserRouter>
  );
}

export default App;
