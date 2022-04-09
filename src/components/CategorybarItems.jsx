import styled from "styled-components";


const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  text-align: center;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;

  &:hover {
    background-color: rgba(0,0,0,0.1);
    transform: scale(1.3);
    }

`;

const Container = styled.div`
    margin-left: 40px;
    height: 100%;
    width: 8vw;
    //background-color: black;
`;



const Title = styled.text`
    color:#3D1002;
    margin-bottom: 20px;
    font-weight: 600;
    fontsize: 22;
    width: 80%;
`;

const CategorybarItems = ({ item }) => {
  return (
    <Container>
      <Info>
        <Title>{item.title}</Title>
      </Info>
    </Container>
  );
};

export default CategorybarItems;