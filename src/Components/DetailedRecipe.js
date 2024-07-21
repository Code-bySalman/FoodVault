import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function DetailedRecipe() {
  const params = useParams();
  const apiKey = 'b5a5570dd12a47459b906d82693d0f6b';
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  
  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${apiKey}`
      );
      const detailData = await data.json();
      setDetails(detailData);
    };

    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2 className="detail-title">{details.title}</h2>
        <img className="detail-image" src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </Button>
       
       
        <br></br>
        <br></br>
        <br></br>
        {activeTab === 'instructions' && (
          <div>
             
             <h1>Instructions</h1>
            <h3 className='instruction' dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
            
          <ul>
            {details.extendedIngredients &&
              details.extendedIngredients.map((ingredient) => (
                
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
 
  .active {
    background: linear-gradient(35deg, #EA0D0D, #EC5757);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 500;
  margin-top: -400px
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default DetailedRecipe;
