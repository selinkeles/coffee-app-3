import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge, { BadgeProps } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';

const Container = styled.div`
    height: 90px;
    background-color: beige;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between; 
`;
const Left = styled.div`
    flex : 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`   
    font-size: 18 px;
    cursor: pointer;
    font-weight: bold;
`;
const SignIn = styled.div`
    font-size: 18px;
    cursor: pointer;
    font-weight: bold;
    border: 2px solid gray;
    border-radius: 19px;
    display: flex;
    padding: 5px;
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    width: 15vw;
`;
const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    width: 15vw;
    background-color: beige;
`;

const Center = styled.div`
    //flex : 1;
    text-align: center:
    //align-items: center;
    justify-content: flex-center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex : 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    //margin-left: 5px;
    font-weight: bold;
    margin-right: 30px;
`;

const Navbar= () =>{
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <SearchIcon style={{color:"gray", fontSize:22}}/> 
                </SearchContainer>
            </Left>
            <Center>
                <Logo>OUR LITTLE COFFEE</Logo>
            </Center>
            <Right>
                <MenuItem>
                    <LoginContainer>
                        Login
                        <PersonIcon style={{color:"gray", fontsize:22}}/>
                    </LoginContainer>
                </MenuItem>
                <MenuItem><SignIn>Join Us</SignIn></MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartIcon color="action" style={{fontsize:22}} />
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  );
};

export default Navbar;
