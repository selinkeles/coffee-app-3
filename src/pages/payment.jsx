import styled from "styled-components";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://cdn.pixabay.com/photo/2021/01/18/12/38/coffee-beans-5928013_1280.jpg") center;

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  background-color: white;
`;

const LittleWrapper = styled.div`
  flex: 1;
  min-width: 50%;
  margin-bottom: 10px;
  //background-color: black;
`


const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 10px 10px 10px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #DC7633;
  color: white;
  cursor: pointer;
`;

const error = styled.h1`
    font-size: 20px;
    font-weight: 200;

    color:  #a02020
`;  

const Sentence = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  //background-color: black;
`;

const Payment = () => {
  const initialValues = { name: "", surname: "", email: "", shippingAddress:  "" ,city:  "",card:  "",cvc: "",exp: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [Errors, setErrors] = useState({});

  const handleChange = (e) => {
      const {name,value} = e.target;
      setFormValues({...formValues, [name]: value});
  };


  const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
  };

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const signup =  () => {
    if(formValues.name==="" || formValues.password==="" ||formValues.surname==="" ||formValues.shippingAddress==="" ||formValues.card==="" ||formValues.shippingadress===""||formValues.cvc===""||formValues.exp===""){
      console.log("null");
      setErrors("Something went wrong!");
    } else {
      console.log("success");
      setErrors("Successfully paid");
          }
}
;

  const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.name) {
        errors.name = "Name is required!"
      }
      if (!values.surname) {
        errors.surname = "Surname is required!"
      }
      if (!values.username) {
        errors.username = "Username is required!"
      }
      if (!values.shippingAddress) {
        errors.shippingAddress = "Shipping Adress is required!"
      } 
      if (!values.city) {
        errors.city = "City is required!"
      } 
      if (!values.card) {
        errors.card = "Card number is required!"
      } 
      if (!values.cvc) {
        errors.cvc = "CVC is required for confirmation!"
      } 
      if (!values.exp) {
        errors.exp = "Expiration date is required!"
      } 
      if(!values.email) {
        errors.email = "Email is required!"
      }
      else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!"
      }
      return errors;
  }

  const handlePlaceholder = (e) => {
    
  }
  return (
    <Container>
      <Wrapper>
        <Title>OUR LITTLE COFFEE.CO</Title>
        <Form onSubmit={handleSubmit}>
          <LittleWrapper>
          <Input placeholder="Name" defaultValue="Name" name="name" value={formValues.name} onChange={handleChange}/>
          <p>{formErrors.name}</p>
          </LittleWrapper>
          
          <LittleWrapper>
          <Input placeholder="Surname" name="surname" value={formValues.surname} onChange={handleChange}/>
          <p>{formErrors.surname}</p>
          </LittleWrapper>

          <LittleWrapper>
          <Input placeholder="Email" name="email" value={formValues.email} onChange={handleChange}/>
          <p>{formErrors.email}</p>
          </LittleWrapper>

          <LittleWrapper>
          <Input placeholder="Shipping Adress" name="shippingAddress" value={formValues.shippingAddress} onChange={handleChange}/>
          <p>{formErrors.shippingAddress}</p>
          </LittleWrapper>
        
          
          <LittleWrapper>
          <Input placeholder="City" name="city" value={formValues.city} onChange={handleChange}/>
          <p>{formErrors.city}</p>
          </LittleWrapper>

          <LittleWrapper>
          <Input placeholder="Card Number" name="card" value={formValues.card} onChange={handleChange}/>
          <p>{formErrors.card}</p>
          </LittleWrapper>
          <LittleWrapper>
          <Input placeholder="CVC" name="cvc" value={formValues.cvc} onChange={handleChange}/>
          <p>{formErrors.cvc}</p>
          </LittleWrapper>
          <LittleWrapper>
          <Input placeholder="Expiration Date (MM/YY)" name="exp" value={formValues.exp} onChange={handleChange}/>
          <p>{formErrors.exp}</p>
          </LittleWrapper>
          
          
          <Agreement>
            By buying this/these product, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={signup}>PAY 
                       </Button>
                       <p>
                       {Errors ==="Successfully paid"  ? (
                        <error>Successfully paid </error>
                        ) : (
                        <error> </error>
                      )}
                      </p>
        </Form>
        <Link to="/orders" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <Sentence>WOULD YOU LIKE TO SEE YOUR ORDER?</Sentence>
          </Link>
      </Wrapper>
    </Container>
  );
};
  
  export default Payment;