import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import img from "./logo.png";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import { logoutUser } from "../redux/userRedux";
import {initializeCart} from "../redux/cartRedux";
import {useDispatch} from "react-redux";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {initialize2} from "../redux/wishlistRedux";
import NotificationsIcon from '@mui/icons-material/Notifications';
import initialize3 from "../redux/notificationRedux";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { IconButton } from 'rsuite';
import { initializedelivery, addDeliveries } from "../redux/adminRedux";
import axios from 'axios';
const Container = styled.div`
    height: 98px;
    background-color: #FAF0E6;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
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
    border: 2px solid #d3d3d3;
    border-radius: 13px;
    background-color: #d3d3d3;
    display: flex;
    padding: 5px;
`;

const LogOut = styled.div`
display: flex;
align-items: center;
padding: 5px;`

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
const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    width: 20vw;
    background-color: #FAF0E6;
`;

const Center = styled.div`
    flex : 1;
    display: flex;
    height: 80%;
    flex-direction: column;
    text-align: center:
    align-items: center;
    justify-content: flex-center;
`;

const Title = styled.h1`
    font-weight: bold;
    color: #3D1002
`;

const Logo = styled.img`
height: 60px;
cursor: pointer;
margin-right: 250px;
margin-leftt: 1px;
`
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

const Navbar2= () =>{
    const quantity = useSelector(state=>state.cart.quantity);
    const quantity2 = useSelector(state=>state.wishlist.quantity2);
    const quantity3 = useSelector(state=>state.notification.quantity3);

    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();
    const navigate = useHistory();

    const handleClick = (user) => {
        if(user){
            dispatch(logoutUser({...user}))
            dispatch(initializeCart());
            dispatch(initialize2());
            dispatch(initialize3())
        }
    }

    const handleDelivery = async () => {
    const res = await axios.get(`http://localhost:8090/order/viewAllOrders/`);
    let path = `/delivery`;
    navigate.push(path);
    dispatch(initializedelivery());
    dispatch(addDeliveries(res.data));
    /*for (var i = 0; i < res.data.length; i++)
    {
      dispatch(makecomment(res.data[i]));
    }*/
    console.log(res.data);
}

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input onChange={(e) => setSearch(e.target.value)}/>
                    <SearchIcon style={{color:"gray", fontSize:22}} /> 
                </SearchContainer>               
            </Left>
            <Center>
                <Title> OUR LITTLE COFFEE.CO              </Title>
            </Center>
            <Right>
            <Link to="/">
            <Logo src={img}/>
            </Link>
                <MenuItem>
                {user ? (<LogOut onClick={() => handleClick(user)}>Logout
                </LogOut>) : 
                <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <LoginContainer>
                    Login
                    <PersonIcon style={{color:"gray", fontsize:22}}/>
                </LoginContainer>
                </Link>}
                </MenuItem>
                <MenuItem>
                <IconButton onClick={handleDelivery}>
                    <DeliveryDiningIcon color="action" style={{fontsize:22}} />
                </IconButton>
                </MenuItem>
                <MenuItem>
                    <ReceiptIcon color="action" style={{fontsize:22}} />
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  );
};
export default Navbar2;
