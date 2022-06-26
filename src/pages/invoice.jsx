import React from 'react'
import styled from 'styled-components'
import img from "./logo.png";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {flagChangeFalse} from "../redux/invoiceRedux";
import { useEffect, useState } from "react";

const Container = styled.div`
    margin: 0px 300px 0px 300px;
    height: 700px;
    background-color: #FAF0E6;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 25%;
    //background-color: black;
`;

const ProductContainer = styled.div`
margin-left: 30px;
margin-right: 30px;
padding: 10px 20px;
//border: 2px solid #d3d3d3;
display: flex;
height: 30%;
//background-color: pink;
`

const Left = styled.div`
    flex : 1;
    display: flex;
    margin-left: 50px;
    flex-direction: column;
    //align-items: center;
    //background-color: white;
`;

const BillTo = styled.div`
display: flex;
font-weight: 30px;
padding: 2px;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  //justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;


const Middle = styled.div`
flex : 1;
display: flex;
flex-direction: column;
//align-items: center;
`

const InvoiceMsg = styled.h1`
padding: 20px;
font-size: 40px;
//margin-bottom: 60px;`

const CoffeeMsg = styled.h2`
padding: 20px;
font-size: 12px;
`

const Right = styled.div`
flex : 1;
display: flex;
flex-direction: column;
align-items: center;`

const Image = styled.img`
margin-top: 30px;
height: 150px;
padding: 20px;`

const Hr = styled.hr`
margin-left: 30px;
margin-right: 30px;
  background-color: #d3d3d3;
  border: none;
  height: 2px;
`;

const Invoice = () => {
    const user = useSelector((state) => state.user.currentUser);
    const invoice = useSelector((state) => state.invoice.showInvoice.invoiceProductList);
    const invoiceInfo = useSelector((state) => state.invoice.showInvoice);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     setNumber(number += 1);
    // })
    console.log(invoice);

    return(
        <div>
            <Container>
                <Wrapper>
                    <Left>
                        <InvoiceMsg>
                        INVOICE
                        </InvoiceMsg>
                        <CoffeeMsg>
                        OUR LITTLE COFFEE.CO
                        </CoffeeMsg>
                    </Left>
                    <Middle>

                    </Middle>

                    <Right>
                        <Image src={img}/>
                    </Right>
                </Wrapper>
                <Wrapper>
                    <Left>
                        <BillTo >
                            BILL TO
                        </BillTo>
                        <BillTo>
                            deniz atalay
                        </BillTo>
                        <BillTo>
                            {invoiceInfo.shipmentAddress}
                        </BillTo>
                    </Left>
                    <Middle>
                            <BillTo>
                                SHIP TO
                            </BillTo>
                            <BillTo>
                                deniz atalay
                            </BillTo>
                            <BillTo>
                                {invoiceInfo.shipmentAddress}
                            </BillTo>
                    </Middle>
                    <Right>
                        <BillTo >
                            INVOICE NUMBER: 001
                        </BillTo>
                        <BillTo >
                            INVOICE DATE: {invoiceInfo.day}/{invoiceInfo.month}/{invoiceInfo.year}
                        </BillTo>
                        
                    </Right>
                </Wrapper>
                <Hr/>
                <ProductContainer>
                        {invoice.map(product=>(<Details>
                                <ProductName>
                                <b>Product:</b> {product.productName}
                                </ProductName>
                                <ProductId>
                                <b>ID:</b> {product.productID}
                                </ProductId>
                            </Details>))}
                </ProductContainer>
            </Container>
        </div>
    )
}

export default Invoice
