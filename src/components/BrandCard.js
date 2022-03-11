import React from 'react'
import Container from './Container.style';
import styled from 'styled-components';
import Wrapper from './Wrapper.style';
import img1 from '../images/dj-johnson-QOOIaaGB4pI-unsplash.jpg';
import img2 from '../images/dj-johnson-YDHpNIj1TgQ-unsplash.jpg';
import img3 from '../images/dj-johnson-ypARZo3Pxog-unsplash.jpg';
import img4 from '../images/mike-petrucci-c9FQyqIECds-unsplash.jpg';


const CardContainer = styled.div`
display:flex;
justify-content: space-around ;
flex-wrap:wrap ;
gap:10px;
`

const Card = styled.div`
flex:1;
min-width:250px;
max-width:200px;
height:200px;
`;

const CardImg = styled.img`
width: 100% ;
height : 100%;
`
const BrandCard = () => {
  return (
    <Container bgColor= 'grey'>
      <Wrapper padTop= '20px' padBottom= '20px'>
        <CardContainer>
            <Card>
            <CardImg src='../images/dj-johnson-ypARZo3Pxog-unsplash.jpg'></CardImg>
            </Card>
            <Card>
            <CardImg src='../images/dj-johnson-ypARZo3Pxog-unsplash.jpg'></CardImg>
            </Card>
            <Card>
            <CardImg src='../images/dj-johnson-ypARZo3Pxog-unsplash.jpg'></CardImg>
            </Card>
            <Card>
            <CardImg src='../images/dj-johnson-ypARZo3Pxog-unsplash.jpg' ></CardImg>
            </Card>
        </CardContainer>
      </Wrapper>
        </Container>
  )
}

export default BrandCard
