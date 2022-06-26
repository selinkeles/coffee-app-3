import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Invoice from "./pages/invoice";
import Payment from "./pages/payment";
import Wishlist from "./pages/Wishlist";
import Delivery from "./pages/Delivery";
import Notification from "./pages/Notification";
import NewProduct from "./pages/NewProduct";
import AddCategory from "./pages/AddCategory";
import InvoiceAdmin from "./pages/InvoiceAdmin";
import Admin from "./pages/Admin";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";



const App = () => {
  const Curuser = useSelector((state) => state.user);
  const invoiceFlag = useSelector((state) => state.invoice.flag);
  const navigate = useHistory();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home /> 
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/invoice" >
          <Invoice />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/wishlist">
          <Wishlist />
        </Route>
        <Route path="/notification">
          <Notification />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/newproduct">
          <NewProduct />
        </Route>
        <Route path="/addcategory">
          <AddCategory/>
        </Route>
        <Route path="/delivery">
          <Delivery />
        </Route>
        <Route path="/invoiceadmin">
          <InvoiceAdmin />
        </Route>
        <Route path="/revenue">
          <Delivery />
        </Route>
        <Route path="/login"> 
          {(Curuser.currentUser&&!Curuser.admin) ? <Redirect to="/" /> : <Login />}
          {(Curuser.currentUser&&Curuser.admin) ? <Redirect to="/admin" /> : <Login />} 
          </Route>
        <Route path="/signup">
          {Curuser.currentUser ? <Redirect to="/" /> : <SignUp />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
