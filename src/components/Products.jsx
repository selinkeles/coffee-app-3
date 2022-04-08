import React from 'react'
import Product from '../components/Product'
import styled from 'styled-components'
import {filterCoffy} from "../data"

const Container = styled.div`
    padding: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`


const Products = () => {
  return (
    <Container>
        {filterCoffy.map(item=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products
