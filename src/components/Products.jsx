import React from 'react'
import Product from '../components/Product'
import styled from 'styled-components'
import {filterCoffy} from "../data"
import {useState, useEffect} from 'react';
import { LineAxisOutlined } from '@mui/icons-material';
import axios from 'axios';

const Container = styled.div`
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`


const Products = ({category,subCategory,sort}) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    const getProducts = async ()=>{
      try{
        const res = await axios.get(`http://localhost:8090/product/getProductsByCategory/${category}`);
        setProducts(res.data);
      }catch(err){}
    }
    getProducts();
  },[category]);

  useEffect(()=> {
    const getFilteredProducts = async ()=>{
      try{
        const res = await axios.get(`http://localhost:8090/product/getProductsBySubCategory/{${filters}}`);
        setFilteredProducts(res.data);
      }catch(err){}
    }
    getFilteredProducts();
  },[category,subCategory])

  return (
    <Container>
        {products.map(item=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products
