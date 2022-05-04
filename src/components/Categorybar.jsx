import React from 'react'
import styled from 'styled-components'
import CategorybarItems from "./CategorybarItems";
import { categoriesBar } from "../data";
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';
import axios from 'axios';

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
    //justify-content: space-between;
    //height: 100%;
    //width: 100%;
`;

const Categorybar= () =>{

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const setCategories = async ()=>{
      try{
        const res = await axios.get('http://localhost:8080/category/getAllCategories');
        setCategories(res.data);
      }catch(err){
        console.log('cannot see');
      }
    }
    setCategories();
  });

    return (
      <Container>
            <Wrapper>
              {categories.map((item) => (
              <CategorybarItems item={item} key={item.id} />
              ))}
            </Wrapper>
      </Container>
    );
  };
  
  export default Categorybar;