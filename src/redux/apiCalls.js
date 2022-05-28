import { loginFailure, loginStart, loginSuccess, setCart } from "./userRedux";
import { initialize, addProduct } from "./cartRedux";
import {addOrder} from "./orderRedux";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  console.log(user.email)
  console.log(user.password)
  try {
    const res = await axios.post(`http://localhost:8090/user/loginUser/`,
      {"email": user.email, "password": user.password});//.then(res => console.log(res)).catch(err=> console.log(err));
    if(res.data.password===null){
      dispatch(loginFailure());
    } else {
      dispatch(loginSuccess(res.data));
      const res1 = await axios.get(`http://localhost:8090/carts/getUserCart/${res.data.id}`);
      dispatch(setCart(res1.data));
      dispatch(initialize());
      for (var i=0; i < res1.data.productList.length; i++)
      {
        dispatch(addProduct(res1.data.productList[i]));
      }
      const res2 = await axios.get(`http://localhost:8090/order/retrieveOrders/${res.data.id}`);
      for (var i=0; i < res2.data.length; i++)
      {
        dispatch(addOrder(res2.data[i]));
        console.log(res2.data[i]);
      }

    }
  } catch (err) {
    dispatch(loginFailure());
    console.log("cannot cathc")
  }

};


