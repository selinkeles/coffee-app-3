import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Categorybar from "../components/Categorybar";
const Container = styled.div``;
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import img from "./logo.png";
import Orders from "../pages/Orders";
import DeleteIcon from '@material-ui/icons/Delete';
import { removeProduct2} from "../redux/wishlistRedux";
import { addOrder } from "../redux/orderRedux";
import {useDispatch} from "react-redux";
import axios from "axios";

const KEY = process.env.REACT_APP_STRIPE;


const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#3D1002" : "transparent"};
  color: ${(props) => props.type === "filled" && "beige"};
`;

const TopTexts = styled.div`
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
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

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Icon = styled.div``

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3D1002;
  color: white;
  font-weight: 600;
`;

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  const [stripeToken, setStripeToken] = useState(null);
  const user = useSelector((state) => state.user.currentUser);
  const date = new Date();
  const [quantity, setQuantity] = useState(1);
  const onToken = (token) => {
    setStripeToken(token);
  };

  console.log(wishlist);

 
  const handleDelete2 = async (product) => {
    try {
      const res = await axios.get(`http://localhost:8090/wishlist/deleteFromWishlist/${user.id}/${product.productId}`);
      console.log(product.id);  
      dispatch(removeProduct2({...product}))
      console.log("wl silindikten sonra")
    } catch(err) {
    console.log("wl silinmedi")
    }
  };
  

  const handleQuantity = (type,product) => {
    if (type === "dec" && product.quantity >= 2) {
      console.log(product.quantity)
      (dispatch(decreaseQuantity2({...product})));
    } else if (type === "inc" && ((product.quantity+1) <= product.stocks)) {
      setQuantity(product.quantity + 1);
      console.log(quantity)
      (dispatch(increaseQuantity2({...product})));
    }
  };

  // useEffect(() => {
  //   const getUserCart = async () => {
  //     try {
  //       const res = await axios.post(`http://localhost:8090/carts/initializeUserCart/${user.id}`)
  //       setUserCart(res.data);
  //       console.log(userCart)
  //     }
  //     catch(err) { }
  //   }
  //   getUserCart();
  // },[user])

  // useEffect(() => {
  //   const addProducttoUserCart = async () => {
  //     try {
  //       const res = await axios.post(`http://localhost:8090/cartsaddProductToCart/${user.id}` , {

  //       })

  //     } catch(err) {
  //       console.log("carta eklenmedi")
  //     }
  //   }
  // },[user,userCart])



  const handleOrder = (cart) => {
    dispatch(addOrder({...cart}));
    dispatch(takeOrder());
  };

  // const handleQuantity = (product) => {
  //   setQuantity(product.quantity);
  // }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Categorybar/>
      <Wrapper>
        <Title>YOUR WISHLIST <FavoriteBorderIcon color="white" style={{fontsize:22, marginRight:"10px"}} /></Title>
        <Top>
          <Link to="/">
          <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
        </Top>
        <Bottom>
          <Info>
            {wishlist.products2.map(product=>(<Product>
              <ProductDetail>
                <Image src={product.productImage} />
                <Details>
                  <ProductName>
                    <b> <Link to={`/product/${product.productId}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>{product.productName}</Link></b>
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {product.productId}
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <Icon >
                  <DeleteIcon onClick= {() => handleDelete2(product)} fontSize="large" cursor="pointer"/>
                </Icon>
                <ProductPrice>$ {product.price} <LocalOfferIcon color="white" style={{fontsize:22, marginRight:"10px"}} />
                </ProductPrice>
              </PriceDetail>
            </Product>
            ))}
            <Hr />
          </Info>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Wishlist;