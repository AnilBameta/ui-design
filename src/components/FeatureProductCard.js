import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {Color} from '../color';

const Card = styled.div`
border:solid 1px rgb(227, 228, 227);
border-radius:4px ;
display:flex ;
flex-direction: column ;
width: ${props => props.cardWidth || '280px'};
height:${props => props.cardHeight || '300px'};
`;

const Picture = styled.div`
flex:4;
border-top-left-radius:4px ;
border-top-right-radius:4px ;
background-image: linear-gradient(to bottom right,blue, skyblue) ;
display: flex ;
justify-content: center ;
align-items: center ;
`;

const Box = styled.div`
width:${props => props.boxWidth || '80px'};
height:${props => props.boxHeight || '70px'};
background-color: white ;
border-radius: 5px ;
`;

const Icon = styled.div`
display: flex ;
justify-content: center ;
margin-top: ${props => props.iconMargin || "16px"};
font-size:40px ;
`;

const Content = styled.div`
flex:1;
border-bottom:solid 1px rgb(227, 228, 227) ;
padding-bottom:15px ;
display:flex;
`;

const Left = styled.div`
text-align: start ;
margin-left: 15px ;
`;

const H3 = styled.h3`
margin-bottom: 0 ;
`;

const P = styled.p`
margin: 0 ;

`;

const Right = styled.div`
flex:1;
text-align:end ;
margin-right: 15px ;
`;

const Footer = styled.div`
flex:1;
display: flex ;
align-items:center;
margin-right:15px ;
margin-left: 15px ;
`;

const LeftFooter =styled.div`
flex:1;
`;

const MiddleFooter =styled.div`
flex:3;
`;

const RightFooter =styled.div`
flex:2;
display: flex ;
justify-content: flex-end ;
`;

const Img =styled.img`
border-radius: 50% ;
width: ${props => props.ImgDim || '30px'};
height: ${props => props.ImgDim || '30px'};
`;

const Btn = styled.button`
background-color: ${Color} ;
display:flex;
align-items: center ;
gap:5px;
color:white;
border:none;
padding:5px 10px 5px 10px  ;
border-radius:3px ;
font-weight: 550 ;
font-size: 16px ;
`;

const BtnIcon = styled.div`
display: inline ;
margin:0;
`;

const FeatureProductCard = (props) => {

  console.log(props)
  return (
    <Card cardWidth = {props.cardWidth} cardHeight = {props.cardHeight}>
        <Picture>
            <Box boxWidth = {props.boxWidth} boxHeight = {props.boxHeight}>
            <Icon iconMargin = {props.iconMargin}>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>  
            </Icon>
            </Box>
        </Picture>
        <Content>
          <Left>
            <H3>Team Component</H3>
            <P>Loreum ipsum</P>
          </Left>
          <Right>
            <H3>$15</H3>
          </Right>
        </Content>
        <Footer>
          <LeftFooter>
            <Img ImgDim = {props.ImgDim} src='../images/dj-johnson-ypARZo3Pxog-unsplash.jpg'></Img>
          </LeftFooter>
          <MiddleFooter>
            <p>PseffBOss</p>
          </MiddleFooter>
          <RightFooter>
           <Btn>
             <BtnIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></BtnIcon>
              <P>3.5</P>
           </Btn>
            </RightFooter>      
        </Footer>
    </Card>
  )
}

export default FeatureProductCard
