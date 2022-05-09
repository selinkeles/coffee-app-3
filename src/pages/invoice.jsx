import React from 'react'
import styled from 'styled-components'
import img from "./logo.png";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

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
    height: 20%;
    //background-color: black;
`;

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
`

const Middle = styled.div`
flex : 1;
display: flex;
flex-direction: column;
align-items: center;
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


const Invoice = () => {
    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();
    console.log(user)

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
                        Sabancı Unı.
                        Orta Mah,      34956 Tuzla/Istanbul
                    </Left>
                    <Middle>

                    </Middle>

                    <Right>
                        <Image src={img}/>
                    </Right>
                </Wrapper>
                <Wrapper>
                    <Left>
                        <BillTo>
                            BILL TO
                        </BillTo>
                        <BillTo>
                            {user.address}
                        </BillTo>
                    </Left>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Invoice