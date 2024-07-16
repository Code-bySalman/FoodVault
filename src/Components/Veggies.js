import React from 'react'
import { useState, useEffect } from 'react'
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

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
          perPage: 5,
          gap: "3rem",
          arrows: true,
          pagination: false,
        
        }}>
      {veggie.map((recipes)=>{
        return(
           <SplideSlide>
            <Card>
                
                <p className='recipe-title' key={recipes.title}>{recipes.title}</p>
                
                <img className='recipe-image' src= {recipes.image} alt={recipes.title}/>
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
  margin: 4rem 0rem;
 `;
 const Card = styled.div`
 height: 20vh;
 width: 30vw
 margin: 10px
display:flex
position: relative
align-items:center
display:block`


const Heading = styled.h2`
  margin: 0;

`;

 
export default Veggies