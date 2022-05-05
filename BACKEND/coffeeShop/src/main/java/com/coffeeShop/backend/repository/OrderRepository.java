package com.coffeeShop.backend.repository;

import com.coffeeShop.backend.model.Orders;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends MongoRepository<Orders, String> {

    public Orders findByuserID(String userID);
    public List<Orders> findAll();
    public Orders insert(Orders order);

}

