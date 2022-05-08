import React from 'react';
import Navbar from '../components/Navbar'
import Categorybar from '../components/Categorybar'
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;    
`;

const OrderWrapper = styled.div`
    margin-top: 40px;
    margin-left: 100px;
    margin-right: 100px;
    //background-color: rgba(0,0,0,0.1);
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  padding: 50px;
  //height: 100%;
  //width: 100%;
  //background-color: black;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;



const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Orders = () => {

  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Categorybar/>
            <Wrapper>
                <Title>YOUR ORDERS</Title>
                <OrderWrapper>
                    <Product>
                        <ProductDetail>
                            <Image src="https://st3.myideasoft.com/idea/bs/42/myassets/products/170/moliendo-brasil-bossa-nova-250g-yoresel-kahve-copy.jpg?revision=1617874798"/>
                            <Details>
                                <ProductName>
                                <b>Product:</b> Moliendo Brasil Bossa Nova Yöresel Kahve 250 gr.
                                </ProductName>
                                <ProductId>
                                <b>ID:</b> 93813718293
                                </ProductId>
                            </Details>
                        </ProductDetail>
                    </Product>
                </OrderWrapper>
            </Wrapper>
            <Footer/>
        </Container>
    );
};

export default Orders;