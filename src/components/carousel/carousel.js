import React from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './App.css';

const content = [
    {
      title: 'Test title',
      description: 'Test description',
      button: 'Read',
      image: "https://imgur.com/a/pr3pvp2"
    },
    {
      title: 'test title two',
      description: 'test description two',
      button: 'Text',
      image: 'https://i.imgur.com/DCdBXcq.jpg'
    }
    ];
  
function Carousel() {
    return (
        <div className="Carousel">
            <Slider className="slider-wrapper">
        {content.map((article, index) =>
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${article.image}') no-repeat center center` }}>
          <div className='inner'>
            <h2>{article.title}</h2>
            <div>{article.description}</div>
            <button>{article.button}</button>
            </div>
          </div>
        )}
      </Slider>

        </div>
        )
    }

export default Carousel;