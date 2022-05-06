import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addProduct } from "../redux/cartRedux";
import {useDispatch} from "react-redux";


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
  flex:1,
  set-margin: 15px;
  min-widht: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  //background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
      opacity: 1;
  }
`

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

const Product = ({item}) => {
  const dispatch = useDispatch();
  const quantity = 1;
  const handleClick = () => {
    
    dispatch(addProduct({...item ,quantity}));
  };
  return (
    <Container>
        <Circle/>
        <Image src={item.image}/>
        <Info>
            <Icon onClick = {handleClick}>
                <ShoppingCartIcon/>
            </Icon>
            <Icon>
                <SearchIcon onClick = {handleClick}/>
            </Icon>
            <Icon>
                <FavoriteIcon/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
