package com.coffeeShop.backend.repository;
import com.coffeeShop.backend.model.Category;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CategoryRepository extends MongoRepository<Category,Integer> {
    Category findByCategoryName(String categoryName);
}
