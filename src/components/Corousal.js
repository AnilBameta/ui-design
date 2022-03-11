import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from './FeatureProductCard';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 }
  ];
const Corousal = () =>{

    return (
        <Carousel breakPoints={breakPoints}>
        <Card 
         cardWidth = '350px'
         cardHeight = '380px'
         boxWidth= '130px'
         boxHeight = '130px'
         iconMargin = '40px'
         ImgDim = '40px'
         />
         <Card
         cardWidth = '350px'
         cardHeight = '380px'
         boxWidth= '130px'
         boxHeight = '130px'
         iconMargin = '40px'
         ImgDim = '40px'
         />
         <Card 
         cardWidth = '350px'
         cardHeight = '380px'
         boxWidth= '130px'
         boxHeight = '130px'
         iconMargin = '40px'
         ImgDim = '40px'
         />
         <Card 
         cardWidth = '350px'
         cardHeight = '380px'
         boxWidth= '130px'
         boxHeight = '130px'
         iconMargin = '40px'
         ImgDim = '40px'
         />
         <Card 
         cardWidth = '350px'
         cardHeight = '380px'
         boxWidth= '130px'
         boxHeight = '130px'
         iconMargin = '40px'
         ImgDim = '40px'
         />
      </Carousel>
    )
  
}
export default Corousal;