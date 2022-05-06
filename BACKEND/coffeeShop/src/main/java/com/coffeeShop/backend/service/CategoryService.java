package com.coffeeShop.backend.service;

import com.coffeeShop.backend.model.Category;
import com.coffeeShop.backend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepo;

    public List<Category> getAllCategories(){
        List<Category> allCategories =   categoryRepo.findAll();
        return allCategories;
    }

    public Category addCategory(Category categoryToBeAdded)
    {
        Category categoryExists = categoryRepo.findByCategoryName(categoryToBeAdded.getCategoryName());
        if (Objects.nonNull(categoryExists)){
            return new Category();
        }
        categoryToBeAdded.setId(UUID.randomUUID());
        categoryToBeAdded = categoryRepo.save(categoryToBeAdded);
        return categoryToBeAdded;
    }

}
