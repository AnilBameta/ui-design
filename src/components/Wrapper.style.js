import styled from 'styled-components';

const Wrapper = styled.div`
width:80%;
margin-left:auto ;
margin-right:auto ;
padding-top: ${props => props.padTop} ;
padding-bottom: ${props => props.padBottom} ;
display:flex ;
align-items: center;
justify-content:center ;
flex-direction: ${props => props.fDir || 'row'} ;
`;


export default Wrapper;