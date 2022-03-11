import styled from 'styled-components';

const Container = styled.div`
background-color: ${props => props.bgColor};
border-bottom: solid 1px ${props => props.bbColor || 'none'} ;
`


export default Container;
