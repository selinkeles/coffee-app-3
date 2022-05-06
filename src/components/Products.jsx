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
  const [sortedProducts, setSortedProducts] = useState([]);
  
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

      if(subCategory === "noFilter") {
        setFilteredProducts(products);
      }
      else {
        try{
          const res = await axios.get(`http://localhost:8090/product/getProductsBySubCategory/${subCategory}`);
          setFilteredProducts(res.data);
        }catch(err){}
      }
    }
    getFilteredProducts();
  },[subCategory,products,sort])

/*
  useEffect(() => {
    const getSortedProducts = async () => {
      if(sort === "newest") {
        setSortedProducts(filteredProducts);
      }
      else {
        console.log(sort);
        console.log(filteredProducts);
        try{
          console.log(filteredProducts);
          const res = await axios.get(`http://localhost:8090/product/sortProducts/${filteredProducts}/${sort}`);
          
          setSortedProducts(res.data);
        }catch(err){}
      }
    }
    getSortedProducts();
  },[sort,filteredProducts])*/


  return (
    <Container>
        {filteredProducts.map(item=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products
