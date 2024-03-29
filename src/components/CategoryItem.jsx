import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 28%;
  height: 100%;
  display: flex;
  flex-direction: column;
  //align-items: center;
  //justify-content: center;
`;

const Title = styled.h1`
    color:#3D1002;
    margin-bottom: 20px;
    font-weight: 900;
    //background-color: beige;
    //border-radius: 0.5;
`;

const Button = styled.button`
    display: flex;
    border:none;
    padding: 10px;
    background-color: beige;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>

      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;