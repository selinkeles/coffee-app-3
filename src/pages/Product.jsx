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
import { useEffect, useState } from "react";
import axios from 'axios';


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

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
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
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
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

const Button = styled.button`
  padding: 15px;
  border: 2px light pink;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: beige;
  }
`;

const Product = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2] ;
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  

  useEffect(() => {
    const getProduct = async () => {
      console.log(id)
      try {
        const res = await axios.get(`http://localhost:8090/product/getProductById/${id}`);
        setProduct(res.data);
        
      } catch(err) {
        console.log("cannot get")
      }
    }
    getProduct();
  }, [id]);

  

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const dispatch = useDispatch();
  const handleClick = () => {

    dispatch(addProduct({...product, quantity}));
  };


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
          <FilterContainer>
            <Filter>
            <FilterTitle>Rating: </FilterTitle>
            <StarBorderIcon color="white" style={{fontsize:22, marginRight:"10px"}} />
            <StarBorderIcon color="white" style={{fontsize:22, marginRight:"10px"}} />
            <StarBorderIcon color="white" style={{fontsize:22, marginRight:"10px"}} />
            <StarBorderIcon color="white" style={{fontsize:22, marginRight:"10px"}} />
            <StarBorderIcon color="white" style={{fontsize:22, marginRight:"10px"}} />
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")}/>
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick = {handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;