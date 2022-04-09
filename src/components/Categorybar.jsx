import React from 'react'
import styled from 'styled-components'
import CategorybarItems from "./CategorybarItems";
import { categoriesBar } from "../data";

const Container = styled.div`
    height: 60px;
    background-color: #FBF7F3;

`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    //align-items: center;
    //justify-content: space-between;
    height: 100%;
`;

const Categorybar= () =>{
    return (
      <Container>
          <Wrapper>
            {categoriesBar.map((item) => (
            <CategorybarItems item={item} key={item.id} />
            ))}
          </Wrapper>
      </Container>
    );
  };
  
  export default Categorybar;
  