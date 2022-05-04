import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Producst from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Categorybar from '../components/Categorybar'
import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';



const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-rigjt: 20px;
`
const Option = styled.option`
`

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const subCategories = [];
    const [categories, setCategories] = useState([]);
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            //...filters,
            [e.target.name]: value,
        });
    };

    console.log(filters)
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Categorybar/>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="subCategory" onChange={handleFilters}>
                        <Option selected>
                            Coffee
                        </Option>
                        <Option>Filter Coffee</Option>
                        <Option>Expresso</Option>
                        <Option>Capsule Coffee</Option>
                        <Option>Turkish Coffee</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                            <Option value="newest">Newest</Option>
                            <Option value="ascending">Price (asc)</Option>
                            <Option value="descending">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Producst category={cat} subCategory={filters} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
