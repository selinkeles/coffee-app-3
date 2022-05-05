package com.coffeeShop.backend;

import com.coffeeShop.backend.model.Category;
import com.coffeeShop.backend.model.Product;
import com.coffeeShop.backend.repository.CategoryRepository;
import com.coffeeShop.backend.repository.ProductRepository;
import com.coffeeShop.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@SpringBootApplication
public class CoffeeShopApplication {

    @Autowired
    private CategoryRepository CategoryRepo;

    @Autowired
    private ProductRepository ProductRepo;

    @Autowired
    private ProductService ProductService;


    public static void main(final String[] args) {
        SpringApplication.run(CoffeeShopApplication.class, args);
    }

    //COMMAND STARTS----------------------------------
    @Bean
    public CommandLineRunner CommandLineRunnerBean() {
        return (args) -> {

            CategoryRepo.deleteAll();
            ProductRepo.deleteAll();

            List<String> list1 = new ArrayList<>();
            list1.add("Filter Coffee");
            list1.add("Espresso");
            list1.add("Nespresso");
            Category category1 = new Category(null, "Coffee", list1);
            category1.setId(UUID.randomUUID());
            List<String> list2 = new ArrayList<>();
            list2.add("Flask");
            list2.add("Coffee Press");
            list2.add("Cup");
            Category category2 = new Category(null, "Equipments", list2);
            category2.setId(UUID.randomUUID());

            Product product1 = new Product(null, "Starbucks Sumatra Roast Blend 250gr", 1, "Full-bodied with a smooth mouthfeel, lingering flavors of dried herbs and fresh earth, and almost no acidity. Our roasters love transforming these unpredictable beans from dark coral green to tiger-orange to a rich, oily mahogany, revealing bold flavors that many us of us can’t live without. Coffee from Sumatra is the foundation of our most treasured blends, and something we’ve been honored to share with you for four decades.","https://productimages.hepsiburada.net/s/2/500/9549932658738.jpg", 5, 12.50, "No Warranty", "Starbucks", "Coffee",
                    "Espresso",0,0,true,15);
            Product product2 = new Product(null, "Jacobs Filter Coffee", 2, "Jacobs high quality filter coffee","https://st1.myideasoft.com/idea/bs/42/myassets/products/765/jacobs-250gr-pack3d-monarch-aci-x_min.jpg?revision=1617643850", 2, 15.00, "No Warranty", "Coffee Shop", "Coffee",
                    "Filter Coffee",2.6,14,true,50);
            Product product3 = new Product(null, "Starbucks Espresso Roast Blend 250gr", 3, "Our master roasters coax the beans along, the heat taking them deep and dark—a recipe for caramelly sweetness so right it's never been changed. The quest began in 1975 with a search for the perfect melding of beans and roast, ending months of intense experimentation later with the coffee you're holding in your hand. A signature blend roasted the way only we can.","https://content.sbuxtr.com/images/9419628318d355e82f8f4a610b1ff56c.jpg", 35, 17.00, "No Warranty", "Starbucks", "Coffee",
                    "Espresso",0,0,false,0);
            Product product4 = new Product(null, "Istanbul Themed Cup", 4, "Istanbul themed cup","https://content.sbuxtr.com/images/7ea7678df290e2eb6b104f0da99c3d9a.jpg", 10, 40.00, "No Warranty", "Starbucks", "Equipments",
                    "Cup",2.3,34,true,35);
            Product product5 = new Product(null, "Ankara Themed Cup", 5, "Ankara themed cup","https://content.sbuxtr.com/images/aff6eb84ce80e772c618edb2f83f9bb0.jpg", 0, 40.00, "No Warranty", "Coffee Shop", "Equipments",
                    "Cup",0,0,false,0);
            Product product6 = new Product(null, "Green Flask", 6, "Green flask","https://content.sbuxtr.com/images/ddc8eb882d67d9a55ca62e623af667b7.jpg", 8, 60.00, "No Warranty", "Starbucks", "Equipments",
                    "Flask",3.0,34,true,15);
            Product product7 = new Product(null, "Coffee Press", 7, "High quality coffee press","https://content.sbuxtr.com/images/d7882b352b09033f6c54c6b6690619e9.jpg", 15, 90.00, "1 Year Warranty", "Starbucks", "Equipments",
                    "Coffee Press",3.7,22,true,20);
            Product product8 = new Product(null, "Nespresso Colombia Coffee Capsules 8 Pack", 8, "High quality coffee press","https://www.nespresso.com/ecom/medias/sys_master/public/13245169401886/C-0361-Main-PDP-MasterOrigin-Colombia-OL.jpg?impolicy=productPdpMainDefault&imwidth=3136", 125, 75.00, "No Warranty", "Nespresso", "Coffee",
                    "Nespresso",4.7,56,true,5);

            product1.setId(UUID.randomUUID());
            product2.setId(UUID.randomUUID());
            product3.setId(UUID.randomUUID());
            product4.setId(UUID.randomUUID());
            product5.setId(UUID.randomUUID());
            product6.setId(UUID.randomUUID());
            product7.setId(UUID.randomUUID());
            product8.setId(UUID.randomUUID());

            CategoryRepo.save(category1);
            CategoryRepo.save(category2);
            ProductRepo.save(product1);
            ProductRepo.save(product2);
            ProductRepo.save(product3);
            ProductRepo.save(product4);
            ProductRepo.save(product5);
            ProductRepo.save(product6);
            ProductRepo.save(product7);
            ProductRepo.save(product8);

        };
    }
    //COMMAND ENDS--------------------------------------

}
