import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function Cuisines() {
  const apiKey = 'b5a5570dd12a47459b906d82693d0f6b';
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();

  const getCuisine = async (name) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}&number=44`
      );
      const data = await response.json();
      setCuisine(data.results || []);
    } catch (error) {
      console.error('Error fetching the cuisine:', error);
    }
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div>
      <Heading>Here is your {params.type} Cuisine!</Heading>
      <Grid>
        {cuisine.map((item) => (
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Card>
        ))}
      </Grid>
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  grid-gap: 2rem;
  justify-items: center; 
  margin-left: 50px;
`;

const Card = styled.div`
    width: 350px;
    height: 300px;
  img {
    width: 80%;
    border-radius: 2rem;
    display:cover;

  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
    margin-right:60px;
  }
`;

const Heading = styled.h2`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  color: #ce0303;
  margin-left: -90px
`;

export default Cuisines;

