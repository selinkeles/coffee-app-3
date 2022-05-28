import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Categorybar from "../components/Categorybar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { addProduct } from "../redux/cartRedux";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";
import BlockIcon from '@mui/icons-material/Block';
import {Rating} from 'react-simple-star-rating';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import comment from '../components/Comment'

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;



const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  margin: 0px 5px;
  cursor: pointer;
`;


const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //background-color: black;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  padding: 30px;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px #3D1002;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const NoComment = styled.div`
padding: 10px;
font-weight: 200;
font-size: 12px
`

const CommentContainer = styled.div`
//background-color: black;
//border: 2px solid #d3d3d3;
//border-radius: 13px;
margin-top: 30px;
display: flex;
flex-direction: column;
height: 50%;
flex: 1 ;`

const Comment = styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
font-weight: 200;
font-size: 19px;`

const CommentButton = styled.button`
padding: 10px;
border-radius: 13px;
border: 2px light pink;
background-color: white;
cursor: pointer;
font-weight: 300;
font-size: 10px;
&:hover{
    background-color: beige;
    border: 2px solid #d4f1f9;
}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  //background-color: black;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;


const Button = styled.button`
  padding: 15px;
  border: 2px light pink;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: beige;
  }
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const success = styled.h1`
    font-size: 20px;
    font-weight: 200;
    color: #20a020;
`;    

const error = styled.h1`
    font-size: 20px;
    font-weight: 200;

    color:  #a02020
`;    

const Product = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2] ;
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [comments, setComments] = useState([]);
  const [Errors, setErrors] = useState({});
  const user = useSelector((state) => state.user.currentUser);
  const [userCart,setUserCart] = useState([]);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [value, setValue] = useState(1);

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await axios.get(`http://localhost:8090/comment/getProductComments/${id}`);
        console.log(id);
        console.log(res.data)
        setComments(res.data);
      } catch(err) {
          console.log("comment işi yaş balım")
      }
    }
    getComments();
  }, [id])

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:8090/product/getProductById/${id}`);
        setProduct(res.data);
      } catch(err) {
      }
    }
    getProduct();
  }, [id]);

  useEffect(() => {
    if(user) {
      const getUserCart = async () => {
        try {
          const res = await axios.post(`http://localhost:8090/carts/initializeUserCart/${user.id}`)
          setUserCart(res.data);
          console.log(userCart)
        }
        catch(err) {
          console.log("cart acılmadı")
         }
         getUserCart();
      }
    }
  },[user])


  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    if (product.stocks > 0 && !user) {
      dispatch(addProduct({...product, quantity}));
    } else if(product.stocks > 0 && user) {
      //dispatch(addProduct({...product, quantity}));
      try {
        const res = axios.post(`http://localhost:8090/carts/addProductToCart/${user.id}`, {
        "productId": product.id, "productName": product.name, "productImage": product.image, "quantity": quantity, "price": product.price 
        });
        console.log(product.id);
        dispatch(addProduct({"productId": product.id, "productName": product.name, "productImage": product.image, "quantity": quantity, "price": product.price}));
        //setUserCart(res.data);
        console.log("eklendikten sonra")
        console.log(userCart);
      } catch(err) {
      console.log("carta eklenmedi")
      }
    }
    else {
      setErrors("error");
    }
  };

  const handleClick1 = () => {
      try {
        const res = axios.post(`http://localhost:8090/comment/commentProduct/${product.id}`, {
          "userID":user.id, "productID":product.id, "comment":query
        });
        //dispatch(addProduct({"productId": product.id, "productName": product.name, "productImage": product.image, "quantity": quantity, "price": product.price}));
        console.log(res.data);
        //console.log(userCart);
      } catch(err) {
        console.log("carta eklenmedi");
      }
  };

  const handleRating = () => {
      setValue()
      console.log(value);
  }

  return (
    <Container>
      <Announcement />
      <Navbar/>
      <Categorybar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.image}  />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          <Desc>
          {product.description}
          </Desc>
          <Price>$ {product.price}</Price>
          <Desc>
          Rating: {product.rating} 
          </Desc>
          <FilterTitle>           
                        {product.stocks > 0 ? (
                          <success>In Stock: {product.stocks}</success>
                        ) : (
                          <error> Out of Stock</error>
                        )}
                      
          </FilterTitle>
          <AddContainer>
            <AmountContainer>
              <Remove cursor='pointer' onClick={() => handleQuantity("dec")}/>
              <Amount>{quantity}</Amount>
              <Add  cursor='pointer' onClick={() => handleQuantity("inc")}/>
            </AmountContainer>
            <Button  onClick = {handleClick} 
            >ADD TO CART</Button> 
          <InfoContainer>

                        {Errors ==="error"  ? (
                          <error> currently not available<BlockIcon color="white" style={{fontsize:22, marginRight:"10px"}} /> </error>
                          ) : (
                          <error> </error>
                        )}
          </InfoContainer>
            </AddContainer>
          <AddContainer>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Give Rating</InputLabel>
              <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //value={age}
                  label="Rating"
                  onChange={e => setValue(e.target.value)}>
              
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
        </AddContainer>
        <CommentContainer>
          <Comment>COMMENTS
            <CommentButton onClick={handleClick1}>MAKE COMMENT</CommentButton>
          </Comment>
          <Hr/>
          <input
              className="search"
              placeholder="Search Products..."
              onChange={(e) => setQuery(e.target.value)} />
        {comments.map(item=>(
            <comment item={item} key={item.id}/>
        ))}
        </CommentContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
