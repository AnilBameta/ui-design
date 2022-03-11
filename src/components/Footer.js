import React from 'react'
import styled from 'styled-components';
import Container from './Container.style';
import Wrapper from './Wrapper.style';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {Color} from '../color';
import {mobile, tablet, laptop} from '../responsive';


const FooterContainer = styled.div`
display: flex ;
width:100%;
gap:30px;
${mobile({flexWrap: 'wrap' })};
${tablet({flexWrap: 'wrap' , gap: '10px'})};
${laptop({gap:'10px'})}
`;

const FirstPart = styled.div`
flex:1;
display: flex ;
flex-direction: column;
color:white;

${mobile({flex: '2', minWidth:'200px', marginLeft: '20px'})};
${tablet({flex: '2', minWidth:'300px'})};
`;

const Logo = styled.h1`
flex:1;
color:${Color};
margin-bottom: 0 ;
`
const P = styled.p`
flex:1;
font-size: 18px ;
`
const Info = styled.div`
flex:1;
display: flex ;
flex-direction: column ;
gap:10px
`;

const Mobile = styled.div`

`;

const Telephone = styled.div`

`;

const Email = styled.div`

`;

const FontIcon = styled.div`
display: inline ;
color:${Color};
padding-right: 10px ;
`;

const Line = styled.div`
width:20%;
height:3px;
background-color:${Color} ;
margin-bottom: 20px;
`;

const SecondPart = styled.div`
flex:1;
display: flex ;
flex-direction: column ;

${mobile({flex: '2',minWidth:'200px', marginLeft: '20px'})};
${tablet({flex: '2', minWidth:'300px'})};
`;

const UL = styled.ul`
list-style-type: none ;
margin-left: -2em; 
`;

const LI = styled.li`
color:white;
padding: 10px 0 3px 0;
`

const Heading = styled.h2`
color:white;
font-weight:400 ;
margin-bottom:10px;
`

const ThirdPart = styled.div`
flex:1;
flex:1;
display: flex ;
flex-direction: column ;

${mobile({flex: '2',minWidth:'200px', marginLeft: '20px'})};
${tablet({flex: '2', minWidth:'300px'})};
`;

const FourthPart = styled.div`
flex:1;
display:flex;
flex-direction: column ;
align-items: start ;

${mobile({flex: '2', minWidth:'200px', marginLeft: '20px'})};
${tablet({flex: '2', minWidth:'300px'})};
`;

const IconsPart = styled.div`
display:flex;
gap:10px;
margin-top:25px;
`

const IconBg = styled.div`
width:40px;
height:40px;
border-radius: 50% ;
text-align: center ;
background-color: ${props => props.color}  ;
`;

const Icon = styled.div`
margin-top:8px;
color:${props => props.color || 'white'};
text-align: center ;
`
const Footer = () => {
  return (
    <Container bgColor='black'>
        <Wrapper padTop= "20px" padBottom='30px'>
         <FooterContainer>
          <FirstPart>
              <Logo>DigiLogo</Logo>
              <P>Lorem dolgo is the name taht is the best in the industry</P>
              <Info>
                  <Mobile>
                  <FontIcon><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> </FontIcon>
                  <span> 343849348</span>
                  </Mobile>
                  <Telephone>
                  <FontIcon><FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon> </FontIcon>
                  <span>  348923293</span>
                  </Telephone>
                  <Email>
                  <FontIcon><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> </FontIcon>
                  <span> xyz@gmail.com</span>
                  </Email>
              </Info>
          </FirstPart>
          <SecondPart>
          <Heading>Join Our Community</Heading>
          <Line></Line>
          <UL>
          <LI>Support Forum</LI>
          <LI>Terms & Conditions</LI>
          <LI>Support Policy</LI>
          <LI>Refund Policy</LI>
          <LI>FAQs</LI>
          </UL>
          </SecondPart>
          <ThirdPart>
          <Heading>Help Support</Heading>
          <Line></Line>
          <UL>
          <LI>Home</LI>
          <LI>Forums</LI>
          <LI>Help Center</LI>
          <LI>Become an Affiliate</LI>
          <LI>Community Meetups</LI>
          </UL>
          </ThirdPart>
          <FourthPart>
          <Heading>Follow Us On</Heading>
          <Line></Line>
          <IconsPart>
          <IconBg color= 'blue'>
          
          <Icon><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> </Icon>
          
          </IconBg>
          <IconBg color= 'pink'>
          
          <Icon><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> </Icon>
          
          </IconBg>
          <IconBg color= 'red'>
          
          <Icon><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon> </Icon>
          
          </IconBg>
          <IconBg color= 'white'>
          
          <Icon  color= 'black'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> </Icon>
          
          </IconBg>
          </IconsPart>
          </FourthPart>
         </FooterContainer>
        </Wrapper>
    </Container>
  )
}

export default Footer
