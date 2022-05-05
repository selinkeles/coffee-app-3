package com.coffeeShop.backend.service;

import com.coffeeShop.backend.model.*;
import com.coffeeShop.backend.repository.CartRepository;
import com.coffeeShop.backend.repository.ProductRepository;
import com.coffeeShop.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepo;

    @Autowired
    private OrderService orderService;

    @Autowired
    private InvoiceService invoiceService;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private ProductRepository productRepo;

    public Cart initalizeUserCart(UUID userId){
        Cart newCart = new Cart();
        newCart.setUserId(userId);
        newCart.setId(UUID.randomUUID());
        newCart.setProductList(new ArrayList<>());
        cartRepo.save(newCart);
        return newCart;
    }
    public Cart addProductToCart(UUID userID,CartItem productToBeAdded)
    {
        Cart userCart = cartRepo.findByUserId(userID);
        if(!Objects.nonNull(userCart)){
            userCart = initalizeUserCart(userID);
        }
        List<CartItem> products = userCart.getProductList();
        boolean productInCart = false;
        for (CartItem currentItem : products){
            System.out.print(currentItem);
            if (currentItem.getProductName().equals(productToBeAdded.getProductName()))
            {
                productInCart = true;
                currentItem.setQuantity(currentItem.getQuantity() + productToBeAdded.getQuantity());
            }
        }

        if (!productInCart)
        {
            products.add(productToBeAdded);
        }

        userCart.setProductList(products);

        return cartRepo.save(userCart);

    }

    public Cart getUserCart(UUID userID)
    {
        Cart cartExists = cartRepo.findByUserId(userID);

        if (!Objects.nonNull(cartExists)){
            return initalizeUserCart(userID);
        }

        return cartExists;
    }

    public Orders makeOrder(UUID cartID)
    {
        Cart cart = cartRepo.findById(cartID);

        //USER ID SETTING
        //
        Orders retOrder = new Orders();
        retOrder.setUserID(cart.getUserId());
        retOrder.setId(UUID.randomUUID());
        retOrder.setOrderDate("-");
        retOrder.setOrderStatus("processing");
        retOrder.setShipmentAddress(userRepo.findById(cart.getUserId()).getAddress());

        List<OrderItem> oList = new ArrayList<OrderItem>();
        double tPrice = 0;

        for (CartItem citem : cart.getProductList())
        {
            Product stockToDecreaseProduct = productRepo.findById(citem.getProductId());
            int currentStock = stockToDecreaseProduct.getStocks();
            stockToDecreaseProduct.setStocks(currentStock-1);
           // productRepo.save(stockToDecreaseProduct);
            OrderItem i = new OrderItem();
            i.setProductID(UUID.randomUUID());
            i.setProductName(citem.getProductName());
            i.setProductID(citem.getProductId());
            i.setQuantity(citem.getQuantity());
            i.setPrice(citem.getPrice());
            i.setProductImage("-");
            tPrice = tPrice + i.getPrice() * i.getQuantity();
            oList.add(i);
        }

        retOrder.setProductList(oList);
        retOrder.setTotalPrice(tPrice);
        Orders order = orderService.insert(retOrder);

        Invoice invoice = new Invoice();
        invoice.setId(UUID.randomUUID());
        invoice.setInvoiceDate(retOrder.getOrderDate());
        invoice.setInvoiceProductList(retOrder.getProductList());
        invoice.setTotalPrice(retOrder.getTotalPrice());
        invoice.setShipmentAddress(retOrder.getShipmentAddress());
        invoice.setUserID(retOrder.getUserID());
        invoice.setOrderID(retOrder.getId());

        invoiceService.insert(invoice);

        return retOrder;

    }

}
