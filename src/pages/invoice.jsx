import React from 'react'
import styled from 'styled-components'
import img from "./logo.png";

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

const Middle = styled.div`
flex : 1;
display: flex;
flex-direction: column;
align-items: center;
`

const InvoiceMsg = styled.h1`
padding: 20px;
font-size: 40px;
margin-bottom: 60px;`

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

    return(
        <div>
            <Container>
                <Wrapper>
                    <Left>
                        <InvoiceMsg>
                        INVOICE
                        </InvoiceMsg>
                        OUR LITTLE COFFEE.CO
                    </Left>
                    <Middle>

                    </Middle>

                    <Right>
                        <Image src={img}/>
                    </Right>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Invoice