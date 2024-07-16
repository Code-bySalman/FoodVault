
import React from 'react';
import Recipies from './Recipies';
import Veggies from './Veggies';


function Explore() {
  return (
    <div>
      <h1 className="Explore">Dive into delicious Recipes.</h1>
      <Recipies />
      <Veggies />
     
    </div>
  );
}

export default Explore;