import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import axios from "axios";
import {useDispatch} from "react-redux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  console.log(user.email)
  console.log(user.password)
  try {
    const res = await axios.post(`http://localhost:8090/user/loginUser`, 
    {"email": user.email, "password": user.password});//.then(res => console.log(res)).catch(err=> console.log(err));
    dispatch(loginSuccess(res.data));
    
  } catch (err) {
    dispatch(loginFailure());
    console.log("cannot cathc")
  }
};