package com.coffeeShop.backend.repository;

import com.coffeeShop.backend.model.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.UUID;
public interface CartRepository extends MongoRepository<Cart,Integer> {
    Cart findByUserId(UUID userId);
    Cart findById(UUID cartID);
}
