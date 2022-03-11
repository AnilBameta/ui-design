import React from 'react'
import styled from 'styled-components';
import img from '../images/lou-batier-5EoWFa_Htdo-unsplash.jpg';
import {Color} from '../color';


const Container = styled.div`
background-image: url(${img}) ;
background-size: cover ;
background-blend-mode: darken ;
`;

const Wrapper = styled.div`
width:55%;
margin-left:auto ;
margin-right: auto ;
justify-content: start ;
align-items: center ;
`;

const H1 = styled.h1`
padding-top:50px ;
font-size: 50px ;
color:white;
`;

const H3 = styled.h3`
padding-top: 10px ;
font-size: 22px ;
color:white;
font-weight: 400 ;
margin-bottom: 40px ;
`;

const Line = styled.div`
width:10%;
height:3px;
background-color:${Color} ;
margin-bottom: 20px;
`;

const Btn = styled.button`
margin-top: 50px ;
background-color: black ;
color:white;
font-size: 18px ;
padding: 10px 25px 10px 25px;
border : none ;
margin-bottom: 100px ;
cursor:pointer;
`;
const Slogan = () => {
  return (
    <Container>
        <Wrapper>
            <H1>Welcome <span style={{color: `${Color}`}}>DIGITAL MARKETING</span> Place</H1>
            <H3>DIGILOG IS THE MOST POWERFUL, & CUSTOMIZABLE TEMPLATE FOR EASY DIGITAL DOWNLOADS PRODUCTS</H3>
            <Line></Line>
            <Btn>Details</Btn>
        </Wrapper>
    </Container>
  )
}

export default Slogan
