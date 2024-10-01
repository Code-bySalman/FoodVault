import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
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
        if (check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=12&tags=vegetarian`
            );
            const data = await api.json();
            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        }
    }

    return (
        <Container>
            <HeaderSection>
                <Heading>Our Vegetarian Picks</Heading>
            </HeaderSection>

            <RecipeSection>
                {veggie.length > 0 ? (
                    <Splide options={{ perPage: 3, gap: '2rem', arrows: true, pagination: false }}>
                        {veggie.map((recipe) => (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <p className="recipe-title2" key={recipe.title}>{recipe.title}</p>
                                    <Link to={'/recipeInfo/' + recipe.id}>
                                        <img className="recipe-image2" src={recipe.image} alt={recipe.title} />
                                    </Link>
                                </Card>
                            </SplideSlide>
                        ))}
                    </Splide>
                ) : (
                    <p>Loading vegetarian recipes...</p>
                )}
            </RecipeSection>
        </Container>
    );
}

// Reusing the same styled components from Recipies

const Container = styled.div`
   margin-top: -340px;
  display: block;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin-left:-5px;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -4rem;
  margin-bottom:10px;
`;

const Heading = styled.h2`
  margin-bottom: 120px;
  margin-top: 0px;
  margin-left: 0px;
  height: 5vh;
 
`;

const RecipeSection = styled.div`
  margin-top: -100px;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 30vh;
  margin-bottom: 20px;
`;

export default Veggies;
