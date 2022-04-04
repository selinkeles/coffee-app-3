import styled from "styled-components";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>
       <LocalShippingIcon color="white" style={{fontsize:22}} />
        Super Deal! Free Shipping on Orders Over $40
         </Container>;
};

export default Announcement;