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

const Register = () => {
  const initialValues = { name: "", surname: "", username: "", email: "", password: "", confirmpassword: "",adress:""};
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

  const signup = async () => {
    if(Object.keys(formErrors).length === 0){
      console.log(formValues.email);
    try {
      const res = await axios.post(`http://localhost:8090/user/registerUser`, 
      {"email": formValues.email, "password": formValues.password, "name": formValues.name, "surname":formValues.surname,
        "address":formValues.adress});
      console.log(res.data.password);
      if(formValues.email==="" || formValues.password==="" ||formValues.name==="" ||formValues.surname==="" ||formValues.confirmpassword==="" ||formValues.username===""||formValues.adress===""){
        console.log("null");
        setErrors("Something went wrong!");
      } else {
        console.log("success");
        setErrors("Successfully created");
            }
    } catch (err) {
      console.log(err);
      setErrors("Something went wrong!");
    }
  }
  };

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
      if (!values.password) {
        errors.password = "Password is required!"
      } else if(values.password.length < 8) {
        errors.password = "Password must be more than 8 characters!";
      }
      if (!values.confirmpassword) {
        errors.confirmpassword = "Password is required for confirmation!"
      } else if(values.confirmpassword !== values.password) {
        errors.confirmpassword = "Password do not match!";
      }
      if(!values.email) {
        errors.email = "Email is required!"
      }
      if(!values.adress) {
        errors.adress = "Email is required!"
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
          <Title>CREATE AN ACCOUNT</Title>
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
            <Input placeholder="Username" name="username" value={formValues.username} onChange={handleChange}/>
            <p>{formErrors.username}</p>
            </LittleWrapper>
            
            <LittleWrapper>
            <Input placeholder="Email" name="email" value={formValues.email} onChange={handleChange}/>
            <p>{formErrors.email}</p>
            </LittleWrapper>
            
            <LittleWrapper>
            <Input placeholder="Password" name="password" value={formValues.password} onChange={handleChange}/>
            <p>{formErrors.password}</p>
            </LittleWrapper>

            <LittleWrapper>
            <Input placeholder="Confirm Password" name="confirmpassword" value={formValues.confirmpassword} onChange={handleChange}/>
            <p>{formErrors.confirmpassword}</p>
            </LittleWrapper>
            <LittleWrapper>
            <Input placeholder="Adress" name="adress" value={formValues.adress} onChange={handleChange}/>
            <p>{formErrors.adress}</p>
            </LittleWrapper>
            
            
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button onClick={signup}>CREATE 
                         </Button>
                         <p>
                         {Errors ==="Successfully created"  ? (
                          <error>Successfully created </error>
                          ) : (
                          <error> </error>
                        )}
                        </p>
          </Form>
          <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <Sentence>ALREADY HAVE AN ACCOUNT?</Sentence>
          </Link>
        </Wrapper>
      </Container>
    );
  };
  
  export default Register;