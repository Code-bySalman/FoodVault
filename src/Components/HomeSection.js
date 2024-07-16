import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomImage from './CustomImage';

function HomeSection() {
  const navigate = useNavigate();
  const images =[
    "/img/img_1.jpg",
    "/img/img_2.jpg",
    "/img/img_3.jpg",
    "/img/img_4.jpg",
    "/img/img_5.jpg",
    "/img/img_6.jpg",
    "/img/img_7.jpg",
    "/img/img_8.jpg",
    "/img/img_9.jpg",
  ]

  return (
    <div className="section">
      <div className="col1">
        <h2 className="title">Welcome! Let's Cook</h2>
        <p className="info">
          Welcome to FoodVault! Don’t miss out on a treasure trove of <br />
          delicious recipes, witty reviews, and tantalizing food stories.<br />
          Join us and spice up your culinary adventures—your taste <br />
          buds will thank you, and your kitchen will never be the same! <br />
          Why cook alone when you can feast with us?
        </p>
        <button className="btn" onClick={() => navigate('/explore')}>
          Let's Explore!
        </button>
      </div>
      <div className="col2 gallery">
           {images.map((src, index) =>(
 <CustomImage key={index} Imgsrc={src} pt={"35%"}/>
           )

           )}
      
       
      </div>
    </div>
  );
}

export default HomeSection;
