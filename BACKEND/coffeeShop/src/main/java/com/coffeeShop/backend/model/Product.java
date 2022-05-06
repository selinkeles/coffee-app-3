package com.coffeeShop.backend.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Data
@NoArgsConstructor
@Document(collection = "Product")
public class Product {
    @Id
    private UUID id;

    private String name;
    private int modelNumber;
    private String description;
    private String image;
    private int stocks;
    private double price;
    private String warrantyStatus;
    private String seller;
    private String category;
    private String subCategory;
    private double rating;
    private double timesRated;
    private boolean onSale;
    private double discountRate;
    /*
    -Name-Model No-Description-Stocks-Price-WarrantyStatus-Seller- OnSale-DiscountRate,Rating,TimesRated,Category,SubCategory(ID-String ??),
     */

    public Product(UUID id, String name, int modelNumber, String description, String image, int stocks, double price, String warrantyStatus, String seller, String category, String subCategory, double rating, double timesRated, boolean onSale, double discountRate) {
        this.id = id;
        this.name = name;
        this.modelNumber = modelNumber;
        this.description = description;
        this.image = image;
        this.stocks = stocks;
        this.price = price;
        this.warrantyStatus = warrantyStatus;
        this.seller = seller;
        this.category = category;
        this.subCategory = subCategory;
        this.rating = rating;
        this.timesRated = timesRated;
        this.onSale = onSale;
        this.discountRate = discountRate;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getModelNumber() {
        return modelNumber;
    }

    public void setModelNumber(int modelNumber) {
        this.modelNumber = modelNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getStocks() {
        return stocks;
    }

    public void setStocks(int stocks) {
        this.stocks = stocks;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getWarrantyStatus() {
        return warrantyStatus;
    }

    public void setWarrantyStatus(String warrantyStatus) {
        this.warrantyStatus = warrantyStatus;
    }

    public String getSeller() {
        return seller;
    }

    public void setSeller(String seller) {
        this.seller = seller;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(String subCategory) {
        this.subCategory = subCategory;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public double getTimesRated() {
        return timesRated;
    }

    public void setTimesRated(double timesRated) {
        this.timesRated = timesRated;
    }

    public boolean isOnSale() {
        return onSale;
    }

    public void setOnSale(boolean onSale) {
        this.onSale = onSale;
    }

    public double getDiscountRate() {
        return discountRate;
    }

    public void setDiscountRate(double discountRate) {
        this.discountRate = discountRate;
    }
}
