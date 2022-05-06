package com.coffeeShop.backend.controller;


import com.coffeeShop.backend.model.Cart;
import com.coffeeShop.backend.model.CartItem;
import com.coffeeShop.backend.model.Orders;
import com.coffeeShop.backend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.UUID;

@RestController
@RequestMapping("/carts")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/initializeUserCart/{userID}")
    public Cart addCategory(@PathVariable UUID userID){
        return cartService.initalizeUserCart(userID);
    }

    @PostMapping("/addProductToCart/{userID}")
    public Cart addCategory(@PathVariable UUID userID, @RequestBody CartItem productToBeAdded){
        return cartService.addProductToCart(userID,productToBeAdded);
    }

    @GetMapping("/getUserCart/{userID}")
    public Cart getUserCart(@PathVariable UUID userID){
        Cart userCart = cartService.getUserCart(userID);
        return userCart;
    }

    @GetMapping("/makeOrder/{cartID}")
    public Orders makeOrderCont(@PathVariable UUID cartID) {
        return cartService.makeOrder(cartID);
    }


}
