package com.coffeeShop.backend.model;


import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@Document(collection = "Carts")
public class Cart {
    @Id
    private UUID id;

    private UUID userId;
    private List<CartItem> productList;

    public Cart(UUID id, UUID userId, List<CartItem> productList) {
        this.id = id;
        this.userId = userId;
        this.productList = productList;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public List<CartItem> getProductList() {
        return productList;
    }

    public void setProductList(List<CartItem> productList) {
        this.productList = productList;
    }
}
