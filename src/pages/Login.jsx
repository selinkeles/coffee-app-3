import styled from "styled-components";
import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { login, getCartID } from "../redux/apiCalls";
import { useDispatch, useSelector, useStore } from "react-redux";


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
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Sentence = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  //background-color: black;
`;
const Error = styled.span`
  color: red;
`;

const Login = () => {
  const initialValues = { username: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  
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

  const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
        errors.username = "Username is required!"
      }
      if (!values.password) {
        errors.password = "Password is required!"
      } else if(values.password.length < 8) {
        errors.password = "Password must be more than 8 characters!";
      }
      //else if (!regex.test(values.email)) {
      //  errors.email = "This is not a valid email format!"
      //}
      return errors;
  }
  
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
          <Input type="password" placeholder="password"   onChange={(e) => setPassword(e.target.value)}/>
          <Button onClick={handleClick} disabled={isFetching}>
          LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Sentence>FORGOT PASSWORD?</Sentence>
          <Link to='/signup' style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <Sentence>CREATE NEW ACCOUNT</Sentence>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
