import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  console.log(user.email)
  console.log(user.password)
  try {
    const res = await axios.post(`http://localhost:8090/user/loginUser`, {"name": "", "surname": "", "email": user.email, "password": user.password, "address": "", "taxId": 0}).then(res => console.log(res)).catch(err=> console.log(err));
    dispatch(loginSuccess(res.data));
    console.log(res.data)
  } catch (err) {
    dispatch(loginFailure());
    console.log("cannot cathc")
  }
};