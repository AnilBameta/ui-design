import React from 'react'
import Container from './Container.style';
import Wrapper from './Wrapper.style';
import styled from 'styled-components';
import {Color} from '../color';
<link rel = 'stylesheet' type='text/css' href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/fontawesome.min.css" />;

const Logo = styled.div`
flex:0.5;
text-align:start ;
color:${Color};
`;
const CenterBtn = styled.div`
flex:1;
display:flex ;
align-items:center ;
justify-content:space-around ;
`;

const Btn = styled.button`
border:none;
color:${props => props.color || 'black'};
background-color:white ;
cursor: pointer;
font-weight: 600 ;
font-size: 16px ;
`;

const Search = styled.div`
flex:1;
text-align:end ;
`;

const SearchBox = styled.input`
width:80% ;
height: 30px;
border-color: 1px grey ;
font-family: FontAwesome 6;
`;

const Icon = styled.div`
position: relative ;
float:center ;
`

const RightBtn = styled.div`
flex:0.5;
display:flex ;
align-items:center ;
justify-content: flex-end ;
gap:20px;
`;


const Navbar = () => {
  return (
    <Container>
        <Wrapper padTop='10px' padBottom= '10px'>
            <Logo>
                <h1>DigiLogo</h1>
            </Logo>
            <CenterBtn>
              <Btn>Home</Btn>
              <Btn>About</Btn>
              <Btn>Product</Btn>
              <Btn>Contact</Btn>
            </CenterBtn>
            <Search >
            <SearchBox placeholder="&#xF002; Search">
            
              </SearchBox>
       
            </Search>
            <RightBtn>
              <Btn color = {Color}>Login</Btn>
              <Btn color = {Color}>Sign Up</Btn>
            </RightBtn>
        </Wrapper>
        </Container>
  )
}

export default Navbar
