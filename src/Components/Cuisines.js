import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useParams } from 'react-router-dom'



function Cuisines() {
    const apiKey = 'b5a5570dd12a47459b906d82693d0f6b';
    const[cuisine, setCuisine ] = useState([]);
    let params = useParams();
    const getCuisine = async (name) => {
   
          const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}`
          );
          const recipes = await data.json();
        
          setCuisine(recipes.result);
        
      };
      useEffect(() => {
      getCuisine(params.type)
       
      }, [params.type]);
  return (
    <Grid>
      
        {cuisine.map(item=>
            {
                return(
                    <Card key={item.id}>
<img src={item.image} alt=""/>
<h4>{item.title}</h4>
                         </Card>
                )
            }
        )}
    </Grid>
  )
}
const Grid = styled.div`
    display: grid;
    grid-tempelate-columns: repeat(autofit(minmax(20rem, 1fr));;
    grid-gap:3rem;
`;
const Card = styled.div`
  img{
  width: 100%;
  border-radius: 2rem
  }
  a{
  text-decoration: none
  }
  h4{
  text-align: center;
  padding: 1rem
  }
`
export default Cuisines