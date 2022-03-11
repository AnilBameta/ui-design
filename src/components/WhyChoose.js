import React from 'react';
import styled from 'styled-components';
import Container from './Container.style';
import Wrapper from './Wrapper.style';
import Card from './WhyChooseCard';
import { tablet} from '../responsive';

const Heading = styled.div`
flex:2;
width: 100% ;
text-align: center ;
`;

const H1 = styled.h1`
font-size: 50px ;
font-weight:300;
letter-spacing: 2px ;
color:white;
`;

const Content = styled.div`
margin-top:50px;
flex:4;
`;

const CardContainer = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-around ;
width:100%;
gap: 20px ;

${tablet({justifyContent: 'center' , gap: '10px'})};


`;
const WhyChoose = () => {
  return (
    <Container bgColor='black'>
        <Wrapper padTop= '30px' padBottom= '30px' fDir='column' >
            <Heading>
                <H1>Why You Choose DigiLogo Place?</H1>
            </Heading>
            <Content>
                <CardContainer>
                    <Card 
                    middle= 'Easily Buy And Sell'
                    bottom= 'This  is very easy to buy and sell our products are the best of the quality in the market'
                    font= 'faGift'
                    />
                    <Card 
                     middle= 'Quality Products'
                     bottom= 'This  is very easy to buy and sell our products are the best of the quality in the market'
                     font= 'faThumbsUp'
                    />
                    <Card 
                     middle= '24/7 Customer Care'
                     bottom= 'This  is very easy to buy and sell our products are the best of the quality in the market'
                     font= 'faGift'
                    />
                    <Card 
                     middle= '100% Secure Payment '
                     bottom= 'This  is very easy to buy and sell our products are the best of the quality in the market'
                     font= 'faLock'
                    />
                </CardContainer>
            </Content>

        </Wrapper>
        </Container>
  )
}

export default WhyChoose;
