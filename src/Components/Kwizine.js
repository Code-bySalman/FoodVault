import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function Kwizines() {
  const apiKey = 'b5a5570dd12a47459b906d82693d0f6b';
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();

  const getCuisine = async (name) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}&number=12`
      );
      const data = await response.json();
      setCuisine(data.results || []); // Initialize with an empty array if data.results is undefined
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
          gap: '2rem',
          arrows: true,
          pagination: true,
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
  margin: 4rem 0rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

const Heading = styled.h2`
  margin: 0;
`;

export default Kwizines;
