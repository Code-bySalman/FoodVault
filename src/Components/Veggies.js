import React from 'react'
import { useState, useEffect } from 'react'
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

function Veggies() {
    const apiKey = 'b5a5570dd12a47459b906d82693d0f6b';
   const[veggie, Setveggie] = useState([]);
    useEffect(() =>{
        getVeggies();
}, [])
const getVeggies = async () => {
    const check = localStorage.getItem("veggie");
    if (check !== null && check !== undefined) {
        Setveggie(JSON.parse(check));
    } else {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=12&tags=vegetarian`
        );
        const data = await api.json();
        localStorage.setItem("veggie", JSON.stringify(data.recipes));
        Setveggie(data.recipes);
    }
}
  return (
     <Wrapper>
        <Heading>Our Vegetarian Picks</Heading>
        <Splide options={{
          perPage: 3,
          gap: "0.5rem",
          arrows: false,
          pagination: false,
        
        }}>
      {veggie.map((recipes)=>{
        return(
           <SplideSlide>
            <Card>
                
                <p className='recipe-title' key={recipes.title}>{recipes.title}</p>
                <Link to={'/recipeInfo/'+ recipes.id}>
                <img className='recipe-image' src= {recipes.image} alt={recipes.title}/>
                </Link>
                </Card>
                </SplideSlide>
                
        );
      }
    )}
    </Splide>
    </Wrapper>
           
  );
}
 const Wrapper = styled.div`
 paddin-top: 10px;
  margin: 7rem 0rem;
 `;
 const Card = styled.div`
 margin-top:20px
 height: 30vh;
 width: 100%;
 margin: 10px
display:flex
position: relative
align-items:center
display:block`


const Heading = styled.h2`
  margin: 0;
  margin-top: -25rem;

`;

 
export default Veggies