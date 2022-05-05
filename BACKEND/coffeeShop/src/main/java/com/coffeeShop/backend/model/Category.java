package com.coffeeShop.backend.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@Document(collection = "Category")
public class Category {
    @Id
    private UUID id;

    private String categoryName;
    private List<String> subcategoryList;

    public Category(UUID id, String categoryName, List<String> subcategoryList) {
        this.id = id;
        this.categoryName = categoryName;
        this.subcategoryList = subcategoryList;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public List<String> getSubcategoryList() {
        return subcategoryList;
    }

    public void setSubcategoryList(List<String> subcategoryList) {
        this.subcategoryList = subcategoryList;
    }
}
