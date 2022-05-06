package com.coffeeShop.backend.controller;


import com.coffeeShop.backend.model.Category;
import com.coffeeShop.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/getAllCategories")
    public List<Category> getAllCategories(){
         List<Category> allCategories = categoryService.getAllCategories();
         return allCategories;
    }

    @PostMapping("/addCategory")
    public Category addCategory(@RequestBody Category categoryToBeAdded){
        return categoryService.addCategory(categoryToBeAdded);
    }


}
