import React from 'react'
import styled from 'styled-components'
import CategorybarItems from "./CategorybarItems";
import { categoriesBar } from "../data";
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 50px;
    background-color: #FBF7F3;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    margin-right: 20px;
    //background-color: black;
    //align-items: center;
    justify-content: space-between;
    //height: 100%;
    //width: 100%;
`;

const Categorybar= () =>{
    return (
      <Container>
        <Link to = {'/products/${item.cat}'} style={{textDecoration:"none"}}>
            <Wrapper>
              {categoriesBar.map((item) => (
              <CategorybarItems item={item} key={item.id} />
              ))}
            </Wrapper>
        </Link>
      </Container>
    );
  };
  
  export default Categorybar;