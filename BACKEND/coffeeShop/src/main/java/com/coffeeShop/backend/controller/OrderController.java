package com.coffeeShop.backend.controller;

import com.coffeeShop.backend.model.Orders;
import com.coffeeShop.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
public class OrderController {

    @Autowired
    private OrderService service;

    OrderController(OrderService service) {
        this.service = service;
    }

    @GetMapping("/retrieveOrders/{userID}")
    @ResponseBody
    public List<Orders> retrieveOrder(@PathVariable UUID userID) {
        return service.retrieveOrder(userID);
    }
}
