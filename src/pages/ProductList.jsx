import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Producst from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Categorybar from '../components/Categorybar'

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
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Categorybar/>
            <Title>Coffee</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Coffee option
                        </Option>
                        <Option>Filter Coffee</Option>
                        <Option>Expresso</Option>
                        <Option>Capsule Coffee</Option>
                        <Option>Turkish Coffee</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                            <Option selected>A-Z</Option>
                            <Option>Highest Rate (desc)</Option>
                            <Option>Price (asc)</Option>
                            <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Producst/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
