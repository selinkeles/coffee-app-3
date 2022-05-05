package com.coffeeShop.backend.model;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Data
@Document(collection = "Orders")
public class Orders {
    @Id
    private UUID id;

    private UUID userID;
    private String orderStatus;
    private String orderDate;
    private List<OrderItem> productList;
    private String shipmentAddress;
    private double totalPrice;

    public Orders() {
    }

    public Orders(UUID userID, String orderStatus, String orderDate,
                  List<OrderItem> productList, String shipmentAddress, double totalPrice) {
        this.userID = userID;
        this.orderStatus = orderStatus;
        this.orderDate = orderDate;
        this.productList = productList;
        this.shipmentAddress = shipmentAddress;
        this.totalPrice = totalPrice;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getUserID() {
        return userID;
    }

    public void setUserID(UUID userID) {
        this.userID = userID;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    public List<OrderItem> getProductList() {
        return productList;
    }

    public void setProductList(List<OrderItem> productList) {
        this.productList = productList;
    }

    public String getShipmentAddress() {
        return shipmentAddress;
    }

    public void setShipmentAddress(String shipmentAddress) {
        this.shipmentAddress = shipmentAddress;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    @Override
    public String toString() {
        return String.format(
                "Order[userID=%s, orderStatus='%s', orderDate='%s', productList='%s', totalPrice='%s']",
                userID, orderStatus, orderDate, productList, totalPrice);
    }

}
