package com.coffeeShop.backend.controller;

import com.coffeeShop.backend.model.Product;
import com.coffeeShop.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/product")
public class ProductController
{
    @Autowired
    private ProductService productService;

    @GetMapping("/getAllProducts")
    public List<Product> getAllProducts(){
        List<Product> allProducts = productService.getAllProducts();
        return allProducts;
    }

    @PostMapping("/addProduct")
    public Product addProducts(@RequestBody Product productToBeAdded){
        return productService.addProduct(productToBeAdded);
    }

    @GetMapping("/getProductsBySubCategory/{subCategory}")
    public List<Product> getProductsBySubCategory(@PathVariable String subCategory){
        List<Product> Products = productService.getProductsBySubCategory(subCategory);
        return Products;
    }

    @GetMapping("/getProductsByCategory/{categoryName}")
    public List<Product> getProductsByCategory(@PathVariable String categoryName){
        List<Product> Products = productService.getProductsByCategory(categoryName);
        return Products;
    }

    @GetMapping("/getProductById/{productID}")
    public Product getProductByID(@PathVariable UUID productID){
        Product currentProduct = productService.getProductById(productID);
        return currentProduct;
    }



    @GetMapping("/searchProducts/{searchString}")
    public List<Product> searchProducts(@PathVariable String searchString)
    {
        List<Product> searchResult = productService.searchProducts(searchString);
        return searchResult;
    }

    @PostMapping("/rateProduct/{productID}")
    public double rateProduct(@PathVariable UUID productID, double rating){
        return productService.rateProduct(productID, rating);
    }

    //"ascending" or "descending"
    @GetMapping("/sortProducts/{list}/{sortMode}")
    public List<Product> sortProductByPrice(@PathVariable List<Product> list, @PathVariable String sortMode)
    {
        return productService.sortProductByPrice(list, sortMode);
    }

}
