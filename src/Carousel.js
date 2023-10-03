import React, { useState } from "react";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import Card from "./Card";



 function Carousel( props ) {
  const [cardIdx, setCardIdx] = useState(0);
  const card = props.cardData[cardIdx];
  const total = props.cardData.length;

  //Increments currCardIdx state by 1
  const goForward = () => {
    setCardIdx((prevIdx) => (prevIdx === total -1 ? 0 : prevIdx + 1));
  };

  const goBackward = () => {
    setCardIdx((prevIdx) => (prevIdx === 0 ? total -1 : prevIdx - 1));
  };

  const renderLeftArrow = cardIdx !==0;
  const renderRightArrow = cardIdx !== total -1;

  return (
    <div className="Carousel">
      <h1>{props.title}</h1>
      <div className="Carousel-main">
        { renderLeftArrow && (
          <i
            className="bi bi-arrow-left-circle"
            onClick={goBackward}
            data-testid="left-arrow"
          />
        )}
        <Card
          caption={card.caption}
          src={card.src}
          currNum={cardIdx + 1}
          totalNum={total}
        />
        { renderRightArrow && (
          <i
            className="bi bi-arrow-right-circle"
            onClick={goForward}
            data-testid="right-arrow"
          />
        )}
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  cardData: [
    {
      src: image1,
      caption: 'Image by x'
    },
    {
      src: image2,
      caption: 'Image by y'
    },
    {
      src: image3,
      caption: 'Image by z'
    },
  ],
  title: "Shells from far-away beaches",
};

export default Carousel;
