import React from 'react'
import Container from './Container.style';
import Wrapper from './Wrapper.style';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {Color} from '../color';

const Mobile = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
margin-right:15px ;
`;

const Icon = styled.div`
margin-right:5px ;
color:${Color};
`;

const P = styled.p`
color:grey;
margin-left: 5px ;
`;

const Mail = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
margin-left:10px ;
`;

const Info = () => {
  return (
    <Container bgColor= 'white' bbColor= 'rgb(227, 228, 227)'>
<Wrapper padTop = '0px' padBottom = '0px'>
<Mobile>
<Icon>
<FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
</Icon>
<P>
8594859598
</P>
</Mobile>
<Mail>
<Icon>
<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>  
</Icon>
<P>
 sales.digilog@gmail.com   
</P>
</Mail>
</Wrapper>
       </Container> 
  )
}

export default Info
