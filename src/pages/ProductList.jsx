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
import SearchIcon from '@mui/icons-material/Search';

const mongoose = require('mongoose');


const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    width: 20vw;
    border-radius: 19px;
    margin-right: 100px;
`;
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
    const [categories, setCategories] = useState([]);
    const [filters, setFilters] = useState("noFilter");
    const [sort, setSort] = useState("newest");    
    const [query, setQuery] = useState("");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            //...filters,
            [e.target.name]: value,
        });
    };

    useEffect(() => {
        const getCategories = async ()=>{
          try{
            const res = await axios.get('http://localhost:8090/category/getAllCategories');
            setCategories(res.data);
          }catch(err){}
        }
        getCategories();
    },[]);

  


  
    const subCategories = [['Coffee','Filter Coffee','Espresso','Nespresso'],['Equipments','Flask','Coffee Press','Cup']]

    console.log(sort)
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Categorybar/>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select onChange={(e) => setFilters(e.target.value)}>
                        <Option value="noFilter">{cat}</Option>
                        <Option value={(subCategories[0][0] === cat) ? "Filter Coffee" : "Flask"}>{(subCategories[0][0] === cat) ? "Filter Coffee" : "Flask"}</Option>
                        <Option value={(subCategories[0][0] === cat) ? "Espresso" : "Coffee Press"}>{(subCategories[0][0] === cat) ? "Espresso" : "Coffee Press"}</Option>
                        <Option value={(subCategories[0][0] === cat) ? "Nespresso" : "Cup"}>{(subCategories[0][0] === cat) ? "Nespresso" : "Cup"}</Option>
                    </Select>
                </Filter>     
                <Filter>
                <SearchContainer>
                <input
            className="search"
            placeholder="Search Products..."
            onChange={(e) => setQuery(e.target.value)} />
            <SearchIcon style={{color:"gray", fontSize:22}} /> 
            </SearchContainer>

                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                            <Option value="newest">Newest</Option>
                            <Option value="ascending">Price (asc)</Option>
                            <Option value="descending">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Producst category={cat} subCategory={filters} sort={sort} query={query}/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
