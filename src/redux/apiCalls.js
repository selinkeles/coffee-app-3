import { initializeUser, loginFailure, loginStart, loginSuccessUser, loginSuccessAdmin, setCart } from "./userRedux";
import { initializeCart, addProduct } from "./cartRedux";
import {initializeOrder, addOrder} from "./orderRedux";
import {addProduct2} from "./wishlistRedux";
import {addNotification, initialize3} from "./notificationRedux";
import {getCost, getRevenue, getItems } from "./adminRedux";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { initializeUseSelector } from "react-redux/es/hooks/useSelector";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  console.log(user.email)
  console.log(user.password)
  const res = await axios.post(`http://localhost:8090/user/loginUser/`,
      {"email": user.email, "password": user.password});//.then(res => console.log(res)).catch(err=> console.log(err));
  dispatch(initializeUser());
  if(res.data.password===null)
  {
    dispatch(loginFailure());
  } 
  else 
  {
      if (res.data.sales == true)
      {

        dispatch(loginSuccessAdmin(res.data));
        const resCost = await axios.get(`http://localhost:8090/product/getCost/`);
        console.log(resCost.data);
        const resRev = await axios.get(`http://localhost:8090/product/getRevenue/`);
        console.log(resRev.data)
        const resItems = await axios.get(`http://localhost:8090/product/itemsSold/`);
        console.log(resItems.data)
        dispatch(getCost(resCost.data));
        dispatch(getRevenue(resRev.data));
        dispatch(getItems(resItems.data));
      }
      else
      {
      dispatch(loginSuccessUser(res.data));
      const res1 = await axios.get(`http://localhost:8090/carts/getUserCart/${res.data.id}`);
      dispatch(initializeCart());
      dispatch(setCart(res1.data));
      for (var i=0; i < res1.data.productList.length; i++)
      {
        dispatch(addProduct(res1.data.productList[i]));
      }
      const res2 = await axios.get(`http://localhost:8090/order/retrieveOrders/${res.data.id}`);
      dispatch(initializeOrder());
      for (var i=0; i < res2.data.length; i++)
      {
        dispatch(addOrder(res2.data[i]));
        console.log(res2.data[i]);
      }
      const res3 = await axios.get(`http://localhost:8090/wishlist/getUsersWishlistProducts/${res.data.id}`);
      for (var i=0; i < res3.data.length; i++)
      {//{"productId": product.id, "productName": product.name, "productImage": product.image, "quantity": quantity, "price": product.price}
        dispatch(addProduct2({"productId":res3.data[i].id, "productName":res3.data[i].name,
        "productImage":res3.data[i].image, "price":res3.data[i].price}));
      }
      const res4 = await axios.get(`http://localhost:8090/notification/getUsersNotifications/${res.data.id}`);
      console.log(res4.data);
      dispatch(initialize3());
      for (var i=0; i < res4.data.notificationList.length; i++)
      {
        dispatch(addNotification(res4.data.notificationList[i]));
        console.log(res4.data.notificationList[i]);
      }
    }
    
  } 

};


