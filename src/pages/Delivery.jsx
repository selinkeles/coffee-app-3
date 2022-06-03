import React from 'react';
import Navbar from '../components/Navbar'
import Categorybar from '../components/Categorybar'
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useEffect, useState } from "react";
import { flagChangeTrue, loadInvoice, initialize } from "../redux/invoiceRedux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {TextField} from "@mui/material";



const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;    
`;

const OrderWrapper = styled.div`
    margin-top: 40px;
    margin-left: 100px;
    margin-right: 100px;
    border: 2px solid #d3d3d3;
    border-radius: 13px;
    //background-color: #FBF7F3;
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
  //align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

const ProductAmount = styled.div`
  font-size: 16px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 200;
  margin-top: 15px;
  margin-left: 5px;
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

const DateStyle = styled.div`
font-weight: 300;
font-size: 16px;
margin: 5px;`


const OrderStatus = styled.div`
  padding: 20px;
  font-size: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;`


const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`

const Invoice = styled.div`
margin-top: 25px;

`

const Button = styled.button`
  padding: 15px;
  border-radius: 13px;
  border: 2px solid #d3d3d3;
  background-color: white;
  cursor: pointer;
  font-weight: 300;
  font-size: 14px;
  &:hover{
      background-color: #d4f1f9;
      border: 2px solid #d4f1f9;
  }
`

//const current = new Date();
//const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

const Orders = () => {
  const order = useSelector((state) => state.order);
  const cartRe = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const [returnOrder, setReturnOrder] = useState([]);
  const [date, setDate] = useState();
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [lastDate, setLastDate] = useState(new Date());

    const navigate = useHistory();

  const handleInvoice = async (cart) => {
      console.log(cart.id);
      const res = await axios.get(`http://localhost:8090/invoice/getOrderInvoice/${cart.id}`);
      console.log(res.data);
      dispatch(initialize());
      dispatch(loadInvoice(res.data));
      let path = `/invoice`;
      navigate.push(path);
  };

  const handleGetOrder = async () => {
      console.log(startDate);
      const res = await axios.post(`http://localhost:8090/order/listByDateRange`, {"from":startDate, "to":lastDate});
      console.log(res.data);
  };

    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Categorybar/>
            <Wrapper>
                <Title>DELIVERY LIST</Title>
                {order.orders.map(cart=>(<OrderWrapper>
                  <Info>
                    {cart.productList.map(product=>(<Product>
                        <ProductDetail>
                            <Image src={product.productImage}/>
                            <Details>
                                <ProductName>
                                <b>Product:</b> {product.productName}
                                </ProductName>
                                <ProductId>
                                <b>ID:</b> {product.productId}
                                </ProductId>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                          <DateStyle > <b>Date:</b> {cart.orderDate}
                          </DateStyle>
                          <ProductAmountContainer>
                            <ProductAmount>Product Amount: {product.quantity} </ProductAmount>
                          </ProductAmountContainer>
                          <ProductPrice>$ {product.quantity * product.price} <LocalOfferIcon color="white" style={{fontsize:22, marginRight:"10px"}} />
                          </ProductPrice>
                        </PriceDetail>
                        <OrderStatus>
                          Order Status: Processing
                          <Icon>
                            <RestartAltIcon fontSize='large'/>
                          </Icon>
                          <Invoice>
                            <Button onClick={()=>handleInvoice(cart)}>GET INVOICE</Button>
                          </Invoice>
                        </OrderStatus>
                    </Product>))}
                  </Info>
                </OrderWrapper>))}
            </Wrapper>
            <Footer/>
        </Container>
    );
};

export default Orders;
