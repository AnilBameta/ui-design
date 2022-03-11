import React from 'react'
import Container from './Container.style';
import Wrapper from './Wrapper.style';
import styled from 'styled-components';
import Card from './FeatureProductCard';
import {Color} from '../color';
import {desktop, tv} from '../responsive';
import Corousal from './Corousal';

const Container3 = styled(Container)`
display:flex;
align-items:center ;
`
const Wrapper3 = styled(Wrapper)`
background-color: white ;
height:80%;
margin-top: 40px ;
margin-bottom: 40px;
`
const Header = styled.div`
display: flex ;
align-items: center ;
flex-direction: row ;
width:90%;
padding-bottom: 20px ;
`;

const Title = styled.div`
flex:1;
text-align:start ;
`;

const H1 = styled.h1`
padding-bottom: 20px;
color: rgb(158, 158, 158);
margin-bottom:0px ;
font-weight:500;
`;

const Line = styled.div`
width:30%;
height:3px;
background-color:${Color} ;
margin-bottom: 20px;
`;


const BtnSec = styled.div`
flex:1;
text-align: right ;
`;

const Btn = styled.button`
padding:10px 20px 10px 20px;
font-size: 15px;
border: 1px solid rgb(227, 228, 227);
border-radius: 3px;
cursor: pointer;
`;

const CardPart = styled.div`
width:90%;
margin-left: auto ;
margin-right: auto;
`

const CardsContainer = styled.div`
display: flex ;
justify-content: center ;
gap: 40px ;
flex-wrap: wrap ;

${desktop({justifyContent: 'space-between' })};
${tv({justifyContent: 'space-between' })};
`;

const Footer = styled.div`

`;
const FeaturedProduct = () => {
  return (
    <Container3 bgColor='grey'>
        <Wrapper3 fDir='column' padBottom= '30px'>
        <Header>
         <Title>
             <H1>FEATURED PRODUCTS</H1>
             <Line></Line>
         </Title>
         <BtnSec>
             <Btn>VIEW ALL  {' >'} </Btn>
         </BtnSec>
        </Header>
        <CardPart>
        <CardsContainer>
        <Corousal />
         </CardsContainer>
        </CardPart>
        
        <Footer>

        </Footer>
        </Wrapper3>
      
    </Container3>
  )
}

export default FeaturedProduct
