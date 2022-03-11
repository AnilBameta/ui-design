import React from 'react'
import Container from './Container.style';
import Wrapper from './Wrapper.style';
import styled from 'styled-components';
import Card from './FeatureProductCard';
import {Color} from '../color';
import {Data1} from '../TrendingProductData'; 
import {mobile, tablet, laptop} from '../responsive';


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
width:100%;
padding-bottom: 20px ;
`;

const Title = styled.div`
flex:1;
text-align:start ;
`;

const H1 = styled.h1`
padding-bottom: 20px;
color: rgb(158, 158, 158);
font-weight:500;
margin-bottom: 0px ;
`;

const Line = styled.div`
width:20%;
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

`;

const CardContainer = styled.div`
display: flex ;
justify-content: center;
gap:70px;
flex-wrap: wrap ;


`;


const TrendingProduct = () => {
    return (
      <Container>
          <Wrapper3 fDir='column' padBottom= '30px'>
          <Header>
           <Title>
               <H1>TRENDING PRODUCTS</H1>
               <Line></Line>
           </Title>
           <BtnSec>
               <Btn>VIEW ALL  {' >'} </Btn>
           </BtnSec>
          </Header>
          <CardPart>
            <CardContainer>
              
              {
                Data1.map(trendingData => (
                 <Card 
                 trendingData
                 ></Card>               
                ))
              }
                
            </CardContainer>
          </CardPart>
          </Wrapper3>
      
    </Container>
  )
}

export default TrendingProduct
