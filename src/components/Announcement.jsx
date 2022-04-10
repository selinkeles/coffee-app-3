import styled from "styled-components";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
const Container = styled.div`
  height: 30px;
  background-color: #3D1002;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>
       <LocalShippingIcon color="white" style={{fontsize:22, marginRight:"10px"}} />
        Super Deal! Free Shipping on Orders Over $40
         </Container>;
};

export default Announcement;