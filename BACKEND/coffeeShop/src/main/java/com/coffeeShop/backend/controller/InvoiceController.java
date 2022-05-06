package com.coffeeShop.backend.controller;

import com.coffeeShop.backend.model.Category;
import com.coffeeShop.backend.model.Invoice;
import com.coffeeShop.backend.model.Orders;
import com.coffeeShop.backend.service.CategoryService;
import com.coffeeShop.backend.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;
@RestController
@RequestMapping("/invoice")
public class InvoiceController {

        @Autowired
        private InvoiceService Service;

        @GetMapping("/getAllInvoices")
        public List<Invoice> getAllInvoices(){
            List<Invoice> invoices = Service.getAllInvoices();
            return invoices;
        }

        @GetMapping("/getOrderInvoice/{orderID}")
        public Invoice getOrderFromInvoice(@PathVariable UUID orderID)
        {
            return Service.getOrderInvoice(orderID);
        }

}
