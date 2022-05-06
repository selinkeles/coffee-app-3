package com.coffeeShop.backend.service;

import com.coffeeShop.backend.model.Orders;
import com.coffeeShop.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repo;

    OrderService(OrderRepository repo) {
        this.repo = repo;
    }

    public List<Orders> retrieveOrder(UUID userID)
    {
        List<Orders> orders = new ArrayList<Orders>();
        for (Orders nOrders : repo.findAll())
        {
            if (nOrders.getUserID().equals(userID))
            {
                orders.add(nOrders);
            }
        }
        return orders;
    }

    public Orders insert(Orders order)
    {
        return repo.insert(order);
    }

}
