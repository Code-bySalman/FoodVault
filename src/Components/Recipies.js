import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faHamburger,  faFish, faCarrot } from '@fortawesome/free-solid-svg-icons';
import { GiSushis } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Recipies() {
  const apiKey = 'b5a5570dd12a47459b906d82693d0f6b';
  const [popular, setPopular] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getRecipies();
  }, []);

  const getRecipies = async () => {
   
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=12`
      );
      const data = await api.json();
      localStorage.setItem('recipes', JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  

  return (
    <Container>
      <HeaderSection>
        <Heading color="Pick">Our Top Picks</Heading>
        <Menu>
          <MenuItem onClick={() => navigate("/Kwizine/Italian")}>
            <FontAwesomeIcon  className="menu"icon={faPizzaSlice} />
            <span>Italian</span>
          </MenuItem>
          <MenuItem onClick={() => navigate("/Kwizine/Latin American")}>
            <FontAwesomeIcon  className="menu" icon={faHamburger} />
            <span>American</span>
          </MenuItem>
          <MenuItem onClick={() => navigate("/Kwizine/Japanese ")}>
            <FontAwesomeIcon className="menu" icon={GiSushis} />
            <span>Japanese</span>
          </MenuItem>
          <MenuItem onClick={() => navigate("/Kwizine/Indian")}>
            <FontAwesomeIcon className="menu" icon={faFish} />
            <span>Indian</span>
          </MenuItem>
          <MenuItem onClick={() => navigate("/Kwizine/Middle Eastern")}>
            <FontAwesomeIcon className="menu" icon={faCarrot} />
            <span>Middle-Eastern</span>
          </MenuItem>
        </Menu>
      </HeaderSection>
      <RecipeSection>
        <Splide options={{ perPage: 3, gap: '2rem', arrows: false, pagination: false }}>
          {popular.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Card>
              
              <p className="recipe-title2" key={recipe.title}>{recipe.title}</p>
                  <Link to={'/recipeInfo/'+ recipe.id}>
                  <img className='recipe-image2' src= {recipe.image} alt={recipe.title}/>
                </Link>
              </Card>
            </SplideSlide>
          ))}
        </Splide>
      </RecipeSection>
    </Container>
  );
}

const Container = styled.div`
  margin: 4rem 0;
  display: block;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -4rem;
`;

const Heading = styled.h2`
  margin-bottom: 100px;
  margin-top : 3rem;
  margin-left: 0px;
  height: 5vh;

 
  
`;

const Menu = styled.div`
  display: flex;
  background-color: #f9721f;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  padding: 1rem;
  display: flex;
  padding-right: 90px;
  margin-bottom:  200px;
  justify-content: top; 
  align-items: top;
  margin-right: 400px;
  border-radius: 2rem;
  
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  color: #beb7a4

   

  span {
    margin-left: 0.5rem;
  }

  &:hover {
    color: #fffffc
  }
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
  padding-top: -290px
  margin-bottom: 20px
 
 
`;




export default Recipies;

