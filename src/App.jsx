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
import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";



const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const invoiceFlag = useSelector((state) => state.invoice.flag);
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
          <Orders />}
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/wishlist">
          <Wishlist />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/signup">
          {user ? <Redirect to="/" /> : <SignUp />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
