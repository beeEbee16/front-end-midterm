import React from 'react';
import { useState, useEffect } from 'react';

const slides = [
  {url: require('../products/philosophersStone.png')},
  {url: require('../products/chamberOfSecrets.png')},
  {url: require('../products/prisonerOfAzkaban.png')},
  {url: require('../products/gobletOfFire.png')},
  {url: require('../products/orderOfThePhoenix.png')},
  {url: require('../products/halfBloodPrince.png')},
  {url: require('../products/deathlyHallows.png')},
  {url: require('../products/hobbit.png')},
  {url: require('../products/fellowshipOfTheRing.png')},
  {url: require('../products/twoTowers.png')},
  {url: require('../products/returnOfTheKing.png')},
  {url: require('../products/voicesFromChernobyl.png')}
]

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      2500
    );

    return () => {};
  }, [index]);

  return (
    <>
      <div>
        <div className="slideshowSlider">
          <img className='slideImage' src={slides.filter((slide, slideIndex) => slideIndex === index)[0].url}/>
        </div>
      </div>
    </>
  );
}

export default ImageSlider
