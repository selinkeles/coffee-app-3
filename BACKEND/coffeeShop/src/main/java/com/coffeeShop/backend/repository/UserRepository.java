package com.coffeeShop.backend.repository;

import com.coffeeShop.backend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface UserRepository extends MongoRepository<User,Integer>
{
    User findById(UUID userID);
}
