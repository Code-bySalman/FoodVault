import React from 'react'
import { useState, useEffect } from 'react'
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

function Veggies() {
    const apiKey = 'b5a5570dd12a47459b906d82693d0f6b';
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggies();
    }, []);

    const getVeggies = async () => {
        const check = localStorage.getItem("veggie");
        if (check !== null && check !== undefined) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=12&tags=vegetarian`
            );
            const data = await api.json();
            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        }
    };

    return (
        <Wrapper>
            <Heading>Our Vegetarian Picks</Heading>
            <Splide
                options={{
                    perPage: 3,
                    gap: "1rem",
                    arrows: false,
                    pagination: false,
                    drag: "free",
                }}
            >
                {veggie.map((recipe) => (
                    <SplideSlide key={recipe.id}>
                        <Card>
                            <Link to={'/recipeInfo/' + recipe.id}>
                                <img className="recipe-image" src={recipe.image} alt={recipe.title} />
                            </Link>
                            <p className="recipe-title">{recipe.title}</p>
                        </Card>
                    </SplideSlide>
                ))}
            </Splide>
        </Wrapper>
    );
}


const Wrapper = styled.div`
padding-top: 10px;
margin: 7rem 0rem;
    margin: 0;
  padding: 0;
  width: 100vw;
   overflow-x: hidden; 
`;

const Card = styled.div`
margin-top: 20px;
height: 100%;
width: 100%;
position: relative;
display: flex;
flex-direction: column; /* Ensure image and title are in a column */
align-items: center;
overflow: hidden; /* Prevent overflow */
`;

const Heading = styled.h2`
margin: 0;
margin-top: -25rem;
`;

const RecipeTitle = styled.p`
font-size: 14px;
text-align: center;
padding: 10px;
max-width: 100%; /* Ensure title doesn't exceed card width */
word-wrap: break-word; /* Allow long titles to wrap onto the next line */
white-space: normal; /* Allow normal wrapping */
overflow: hidden;
`;

const RecipeImage = styled.img`
width: 100%;
height: auto; /* Maintain aspect ratio */
border-radius: 10px;
margin-bottom: 10px;
`;

export default Veggies;