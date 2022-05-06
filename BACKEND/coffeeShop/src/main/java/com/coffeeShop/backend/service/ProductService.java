package com.coffeeShop.backend.service;

import com.coffeeShop.backend.model.Comment;
import com.coffeeShop.backend.model.Product;
import com.coffeeShop.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepo;

    public List<Product> getAllProducts(){
        List<Product> allProducts = productRepo.findAll();
        return allProducts;
    }

    public Product addProduct(Product productToBeAdded)
    {
        Product productExists = productRepo.findByName(productToBeAdded.getName());
        if (Objects.nonNull(productExists)){
            return new Product();
        }
        productToBeAdded.setId(UUID.randomUUID());
        productToBeAdded = productRepo.save(productToBeAdded);
        return productToBeAdded;
    }

    public List<Product> getProductsBySubCategory(String subCategory){
        List<Product> Products = productRepo.findAllBySubCategory(subCategory);
        if(Objects.nonNull(Products))
        {
            return Products;
        }
        else
            return new ArrayList<>();
    }

    public List<Product> getProductsByCategory(String category){
        List<Product> Products = productRepo.findAllByCategory(category);
        if(Objects.nonNull(Products))
        {
            return Products;
        }
        else
            return new ArrayList<>();
    }


    public Product getProductById(UUID productId){
        Product currentProduct = productRepo.findById(productId);
        if(Objects.nonNull(currentProduct))
        {
            return currentProduct;
        }
        else
            return new Product();
    }



    public List<Product> searchProducts(String searchString) {
        List<Product> productNameSearchResult = productRepo.findAllByNameIsContaining(searchString);
        List<Product> productDescriptionSearchResult = productRepo.findAllByDescriptionIsContaining(searchString);
        List<Product> finalSearchResult = new ArrayList<>();
        finalSearchResult.addAll(productNameSearchResult);
        finalSearchResult.addAll(productDescriptionSearchResult);

        return finalSearchResult;
    }

    public double rateProduct(UUID productID, double rating)
    {
        Product product = productRepo.findById(productID);
        double newRating = ((product.getRating() * product.getTimesRated()) + rating) / (product.getTimesRated() + 1);
        double newTimesRated = product.getTimesRated() + 1;
        product.setRating(newRating);
        product.setTimesRated(newTimesRated);
        productRepo.save(product);
        return newTimesRated;
    }

    public List<Product> sortProductByPrice(List<Product> list, String sortMode)
    {
        if (list.size() <= 1)
        {
            return list;
        }
        else
        {
            if (sortMode.equals("ascending"))
            {
                return sortProductByPriceAscending(list);
            }
            else if (sortMode.equals("descending"))
            {
                return sortProductByPriceDescending(list);
            }
        }
        return null;
    }

    private List<Product> sortProductByPriceDescending(List<Product> list) {

        for (int i = 1; i < list.size(); i++)
        {
            Product product = list.get(i);
            int j = i - 1;

            for (; j >= 1; j--)
            {
                if (product.getPrice() > list.get(j).getPrice())
                {
                    list.set(j+1, list.get(j));
                }
                else
                {
                    list.set(j, product);
                    break;
                }
            }
            if (j == 0)
            {
                list.set(0, product);
            }
        }

        return list;
    }

    private List<Product> sortProductByPriceAscending(List<Product> list) {
        for (int i = 1; i < list.size(); i++)
        {
            Product product = list.get(i);
            int j = i - 1;

            for (; j >= 1; j--)
            {
                if (product.getPrice() < list.get(j).getPrice())
                {
                    list.set(j+1, list.get(j));
                }
                else
                {
                    list.set(j, product);
                    break;
                }
            }
            if (j == 0)
            {
                list.set(0, product);
            }
        }

        return list;
    }
}
