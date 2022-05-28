import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { makecomment } from "../redux/cartRedux";
import {useDispatch} from "react-redux";
import { Link } from "react-router-dom";


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.1);
  z-index:3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
font-weight: 200;
font-size: 19px;`




const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  backround-color: white;
  position: absolute;
`

const Image = styled.img`
  height: 75%;
  //z-index: 2;
`



const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.3s ease;

  &:hover{
    background-color: beige;
    transform: scale(1.3);
  }
`

const Comment = ({item}) => {
  const dispatch = useDispatch();
  const quantity = 1;
  const handleClick = () => {
    
    dispatch(makecomment({...item }));
  };
  return (
    <Container>
        <Info>
        {item.comment}
        {item.nameSurname}
        </Info>
    </Container>
  )
}

export default Product