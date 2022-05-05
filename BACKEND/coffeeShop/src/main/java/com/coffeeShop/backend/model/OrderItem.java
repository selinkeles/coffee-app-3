package com.coffeeShop.backend.model;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Data
public class OrderItem {

    private UUID productID;
    private String productName;
    private String productImage;
    private int quantity;
    private double price;

    public OrderItem() {
    }

    public OrderItem(UUID productID, String productName, String productImage,
                     int quantity, double price) {
        this.productID = productID;
        this.productName = productName;
        this.productImage = productImage;
        this.quantity = quantity;
        this.price = price;
    }

    public UUID getProductID() {
        return productID;
    }

    public void setProductID(UUID productID) {
        this.productID = productID;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductImage() {
        return productImage;
    }

    public void setProductImage(String productImage) {
        this.productImage = productImage;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "OrderItem{" +
                "productID=" + productID +
                ", productName='" + productName + '\'' +
                ", productImage='" + productImage + '\'' +
                ", quantity=" + quantity +
                ", price=" + price +
                '}';
    }
}
