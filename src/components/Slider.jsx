import React from 'react'
import styled from 'styled-components'
import pic from "./coffeea.jpg"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Container = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    background-color: coral;
    position: relative;
`;
const Arrow = styled.div`
    font-size: 22px;
    //width: 70px;
    //height: 70px;
    //background-color: #fff7f7;
    //border-radius: 50%;
    display: flex;
    color: beige;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.8;
`;
const Wrapper = styled.div`
    height: 40vh;
`;

const Slide = styled.div`
    display: flex;
    width: 100vw;
    height: 40vh;
    align-items: center;
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 100%:
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    //background-color: black;
`;

const Slider = () => {
  return (
    <Container>
        <Arrow direction = "left">
            <ArrowCircleLeftIcon/>
        </Arrow>
        <Wrapper>
            <Slide>
                <ImgContainer>
                    <Image src={pic}/>
                </ImgContainer>
                <InfoContainer>

                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction = "right">
            <ArrowCircleRightIcon/>
        </Arrow>
      
    </Container>
  )
}

export default Slider
