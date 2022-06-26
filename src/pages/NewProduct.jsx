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
  background: url("https://img.freepik.com/free-photo/coffee-beans-with-props-making-coffee_1220-4536.jpg?t=st=1655928018~exp=1655928618~hmac=85ac2e3097a622082129400e7122c68c2ba0f53816c68292233d82d127d43103&w=996") center;
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

const NewProduct = () => {
const initialValues = { id: "", name: "", image: "", stock: "", category: "",price:"",description:"", cost:""};
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
  if(Object.keys(formErrors).length === 0){
    console.log(formValues.name);
  try {
    const res = await axios.post(`http://localhost:8090/product/addProduct`, 
    {"name": formValues.name, "image": formValues.image, "stocks":formValues.stock,
      "category":formValues.category,"price":formValues.price,"description":formValues.description,"cost":formValues.cost,"initStock":formValues.stock});
    if(formValues.name==="" ||formValues.image==="" ||formValues.stock==="" ||formValues.category==="" ||formValues.price===""||formValues.description===""){
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
      errors.name = "Name is required!"
    }
    if (!values.category) {
      errors.category = "Category is required!"
    }
    if (!values.image) {
      errors.image = "Image is required!"
    } 
    if (!values.stock) {
      errors.stock = "Stock is required!"
    }
    if(!values.price) {
      errors.price = "Price is required!"
    }
    if(!values.description) {
      errors.description = "Description is required!"
    }
    return errors;
}

  return (
    <Container>

        <Wrapper>
          <Title> ADD PRODUCT</Title>
          <Form onSubmit={handleSubmit}>
            <LittleWrapper>
            <Input placeholder="Name" defaultValue="Name" name="name" value={formValues.name} onChange={handleChange}/>
            <p>{formErrors.name}</p>
            </LittleWrapper>
            
            <LittleWrapper>
            <Input placeholder="Category" name="category" value={formValues.category} onChange={handleChange}/>
            <p>{formErrors.category}</p>
            </LittleWrapper>
            
            <LittleWrapper>
            <Input placeholder="Image" name="image" value={formValues.image} onChange={handleChange}/>
            <p>{formErrors.image}</p>
            </LittleWrapper>
            
            <LittleWrapper>
            <Input placeholder="Stock" name="stock" value={formValues.stock} onChange={handleChange}/>
            <p>{formErrors.stock}</p>
            </LittleWrapper>

            <LittleWrapper>
            <Input placeholder="Price" name="price" value={formValues.price} onChange={handleChange}/>
            <p>{formErrors.price}</p>
            </LittleWrapper>
            <LittleWrapper>
            <Input placeholder="Description" name="description" value={formValues.description} onChange={handleChange}/>
            <p>{formErrors.description}</p>
            </LittleWrapper>
            <LittleWrapper>
            <Input placeholder="Cost" name="cost" value={formValues.cost} onChange={handleChange}/>
            <p>{formErrors.cost}</p>
            </LittleWrapper>
            
          
            <Button onClick={addproduct}>ADD PRODUCT 
                         </Button>
                         <p>
                         {Errors ==="Successfully created"  ? (
                          <error>Successfully created </error>
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

export default NewProduct;