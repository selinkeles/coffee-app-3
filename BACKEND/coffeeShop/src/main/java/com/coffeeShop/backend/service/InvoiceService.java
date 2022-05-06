package com.coffeeShop.backend.service;

import com.coffeeShop.backend.model.Category;
import com.coffeeShop.backend.model.Invoice;
import com.coffeeShop.backend.model.Orders;
import com.coffeeShop.backend.model.User;
import com.coffeeShop.backend.repository.CategoryRepository;
import com.coffeeShop.backend.repository.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
public class InvoiceService {

    @Autowired
    private InvoiceRepository InvoiceRepo;

    public List<Invoice> getAllInvoices(){
        List<Invoice> retInvoices = InvoiceRepo.findAll();
        return retInvoices;
    }

    public Invoice getOrderInvoice(UUID orderID) {

        Invoice invoice = InvoiceRepo.findByOrderID(orderID);
        return invoice;
    }

    public Invoice insert(Invoice invoice) {
        return InvoiceRepo.insert(invoice);
    }
}
