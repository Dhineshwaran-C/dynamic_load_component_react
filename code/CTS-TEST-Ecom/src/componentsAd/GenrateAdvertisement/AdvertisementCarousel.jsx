import React, { useState, useEffect } from 'react';
import './ads.css'
import  {generatedNumber}  from './queue';
const AdvertisementCarousel = ({ advertisements,delay}) => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const interval =  setInterval(() => {
      let index = generatedNumber(advertisements)
      setCurrentAdIndex(index);
    }, delay); // Change advertisement every n seconds 

    return () => {
      clearInterval(interval); 
    };
  }, [advertisements]);

  return (
    <div className="ad_container">
      <img className="img" src={advertisements[currentAdIndex]} alt="Advertisement" />
    </div>
  );
};

export default AdvertisementCarousel;

