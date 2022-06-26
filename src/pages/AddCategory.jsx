//import "./newProduct.css";
import Navbar2 from '../components/Navbar2'
import styled from "styled-components";
import {useState, useEffect} from 'react';
import axios from 'axios';
import Announcement from "../components/Announcement";
import { Link } from "react-router-dom";

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

const AddCategory = () => {
const subcatarray=[];
const initialValues = { name: "",subcat: "",subcat2: "",subcat3: ""};
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

const addproduct = async () => {
  subcatarray.push(formValues.subcat)
  subcatarray.push(formValues.subcat2)
  subcatarray.push(formValues.subcat3)
  if(Object.keys(formErrors).length === 0){
    console.log(formValues.name);
  try {
    const res = await axios.post(`http://localhost:8090/category/addCategory`, 
    {"categoryName": formValues.name});
    if(formValues.name==="" ){
      console.log("null");
      setErrors("Something went wrong!");
    } else {
      console.log("success");
      setErrors("Successfully created product");
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
      errors.name = "Category name is required!"
    }
    return errors;
}

  return (
    <Container>

        <Wrapper>
          <Title> ADD CATEGORY</Title>
          <Form onSubmit={handleSubmit}>
            <LittleWrapper>
            <Input placeholder="Category Name" defaultValue="Name" name="name" value={formValues.name} onChange={handleChange}/>
            <p>{formErrors.name}</p>
            </LittleWrapper>

            <Button onClick={addproduct}>SEND
                         </Button>
                         <p>
                         {Errors ==="Category successfully created"  ? (
                          <error>Category successfully created </error>
                          ) : (
                          <error> </error>
                        )}
                        </p>
          </Form>
          <Link to="/admin" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <Sentence>RETURN BACK TO ADMIN PANEL</Sentence>
          </Link>
        </Wrapper>
      </Container>
    );
  };

export default AddCategory;