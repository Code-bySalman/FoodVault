import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function Cuisines() {
  const apiKey = 'b5a5570dd12a47459b906d82693d0f6b';
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();

  const getCuisine = async (name) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}&number=12`
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
    <Wrapper>
      <Heading>Here is your {params.type} Cuisine.</Heading>
      <Splide
        options={{
          perPage: 4,
          perMove: 4,
          gap: '1rem',
          arrows: true,
          pagination: true,
          breakpoints: {
            1024: {
              perPage: 2,
              perMove: 2,
            },
            768: {
              perPage: 1,
              perMove: 1,
            },
          },
        }}
      >
        {cuisine.map((item) => (
          <SplideSlide key={item.id}>
            <Card>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0;
  align-items: center;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  height: 60vh; 
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

const Heading = styled.h2`
  margin: 0;
  text-align: center;
  justify-content: center;
  padding: 1rem;
  color: #ce0303;
  padding-right: 100px;
  padding-left: 0px;
`;

export default Cuisines;
