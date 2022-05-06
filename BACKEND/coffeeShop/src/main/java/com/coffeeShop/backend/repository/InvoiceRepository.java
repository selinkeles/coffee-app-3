package com.coffeeShop.backend.repository;

import com.coffeeShop.backend.model.Cart;
import com.coffeeShop.backend.model.Invoice;
import com.coffeeShop.backend.model.Orders;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface InvoiceRepository extends MongoRepository<Invoice, String> {
    public Invoice insert(Invoice invoice);
    public Invoice findByOrderID(UUID orderID);
}
