import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faThumbsUp, faLock } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import {Color} from '../color';

const Container = styled.div`
width:300px;
height:300px;
display: flex;
flex-direction: column ;
`;

const Top = styled.div`
flex:3;
display: flex ;
align-items: center ;
justify-content: center ;
`;

const Background = styled.div`
width:100px;
height:100px;
border-radius: 50% ;
background-color:${Color};
`;

const Font = styled.div`
text-align: center ;
color:white;
margin-top:30px ;
font-size: 30px ;
`;

const Middle = styled.div`
flex:2;
text-align:center ;
`;

const H3 = styled.h3`
color:white;
`;

const Bottom = styled.div`
flex:3;
text-align:center ;
`;

const P = styled.p`
color:grey;
`;
const WhyChooseCard = (props) => {
  let fontName = props.font
  return (
    <Container>
     <Top>
      <Background>
          <Font>
          <FontAwesomeIcon icon={fontName === 'faGift' ? faGift : fontName === 'faLock' ? faLock : fontName === 'faThumbsUp'? faThumbsUp : null }></FontAwesomeIcon>  
          </Font>
      </Background>
     </Top>
     <Middle>
    <H3>{props.middle}</H3>
     </Middle>
     <Bottom>
      <P>{props.bottom}</P>
     </Bottom>
    </Container>
  )
}

export default WhyChooseCard
