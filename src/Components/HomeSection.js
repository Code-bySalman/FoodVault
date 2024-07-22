import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomImage from './CustomImage';
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";


function HomeSection() {
  const apiKey = 'b5a5570dd12a47459b906d82693d0f6b';
  const [random, setRandom] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getRecipies();
  }, []);

  const getRecipies = async () => {
   
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`
    );
    const data = await api.json();
    localStorage.setItem('recipes', JSON.stringify(data.recipes));
    setRandom(data.recipes);
  }
  const [input, setInput] = useState("");
  const handleChange=(e)=>{
    e.preventDefault();
    navigate('searched/'+ input)
  }

  return (
    <>
    <div className="section">
      <div className="col1">
        <h2 className="title">Welcome! Let's Cook</h2>
        <p className="info">
          Welcome to FoodVault! Don’t miss out on a treasure trove of <br />
          delicious recipes, witty reviews, and tantalizing food stories.<br />
          Join us and spice up your culinary adventures—your taste <br />
          buds will thank you, and your kitchen will never be the same! <br />
          Why cook alone when you can feast with us?
        </p>
        <button className="btn" onClick={() => navigate('/explore')}>
          Let's Explore!
        </button>
      </div>
      <div className="col2 gallery">
           {random.map((recipe) =>(
 <CustomImage key={recipe.id} Imgsrc= {recipe.image} alt={recipe.title} pt={"25%"}/>
           )

           )}
      
       
      </div>
    
    </div>
    <div>
     
      <SearchForm onSubmit={handleChange}>
     <div className="search-button"><FaSearch onClick={handleChange}></FaSearch>
      <SearchInput onChange={(e)=>{setInput(e.target.value)}} type="text" value={input}  placeholder='Search for recipes...' />
      </div>
    </SearchForm>
    </div>
    </>
  );
}

const SearchForm = styled.form`
  width: 40vw;
 
  height: 250px
  display: flex;
  justify-content: center;
  margin-top: 25rem;
  align-items: center;
  border-radius:1rem
 
  
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid #beb7a4;
  font-size: 1rem;
  margin-left: -900px;
 background-color: #beb7a4
  background-gradient: (35deg, #beb7a4, #E1DED9)
  box-shadow: 0px 0.2px 0.3px 0.5px #313131
`;
export default HomeSection;
