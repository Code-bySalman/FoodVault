import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomImage from './CustomImage';
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";


function HomeSection() {
  const navigate = useNavigate();
  const images =[
    "/img/img_1.jpg",
    "/img/img_2.jpg",
    "/img/img_3.jpg",
    "/img/img_4.jpg",
    "/img/img_5.jpg",
    "/img/img_6.jpg",
    "/img/img_7.jpg",
    "/img/img_8.jpg",
    "/img/img_9.jpg",
  ]
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
           {images.map((src, index) =>(
 <CustomImage key={index} Imgsrc={src} pt={"35%"}/>
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
