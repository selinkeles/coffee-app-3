package com.coffeeShop.backend.repository;

import com.coffeeShop.backend.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.UUID;

public interface ProductRepository extends MongoRepository<Product, Integer> {
    List<Product> findAllBySubCategory(String subCategory);
    List<Product> findAllByCategory(String Category);
    Product findByName(String name);
    Product findById(UUID productID);
    List<Product> findAllByNameIsContaining (String searchString);
    List<Product> findAllByDescriptionIsContaining (String searchString);

}
