package com.coffeeShop.backend.controller;

import com.coffeeShop.backend.model.User;
import com.coffeeShop.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController
{
    @Autowired
    private UserService userService;

    @GetMapping("/getAllUsers")
    public List<User> getAllUsers(){
        List<User> allUsers = userService.getAllUsers();
        return allUsers;
    }

    @PostMapping("/registerUser")
    public String registerUser(@RequestBody User userToBeRegistered){
        return userService.registerUser(userToBeRegistered);
    }

    @PostMapping("/loginUser")
    public User returnCustomer(@RequestBody User userToLogin) {
        return userService.returnCustomer(userToLogin);
    }
}
