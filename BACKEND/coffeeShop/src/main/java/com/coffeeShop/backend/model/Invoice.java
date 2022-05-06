package com.coffeeShop.backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Data
@Document(collection = "Invoice")
public class Invoice {

    @Id
    private UUID id;

    private UUID userID;
    private String InvoiceDate;
    private List<OrderItem> InvoiceProductList;
    private double totalPrice;
    private UUID orderID;
    private String shipmentAddress;

    public Invoice() {
    }

    public Invoice(UUID userID, String InvoiceDate, List<OrderItem> InvoiceProductList, double totalPrice, UUID orderID,
                   String shipmentAddress) {
        this.userID = userID;
        this.InvoiceDate= InvoiceDate;
        this.InvoiceProductList = InvoiceProductList;
        this.totalPrice = totalPrice;
        this.orderID = orderID;
        this.shipmentAddress = shipmentAddress;
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

    public String getInvoiceDate() {
        return InvoiceDate;
    }

    public void setInvoiceDate(String invoiceDate) {
        InvoiceDate = invoiceDate;
    }

    public List<OrderItem> getInvoiceProductList() {
        return InvoiceProductList;
    }

    public void setInvoiceProductList(List<OrderItem> invoiceProductList) {
        InvoiceProductList = invoiceProductList;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public UUID getOrderID() {
        return orderID;
    }

    public void setOrderID(UUID orderID) {
        this.orderID = orderID;
    }

    public String getShipmentAddress() {
        return shipmentAddress;
    }

    public void setShipmentAddress(String shipmentAddress) {
        this.shipmentAddress = shipmentAddress;
    }
}
