package com.coffeeShop.backend.controller;


import com.coffeeShop.backend.model.Comment;
import com.coffeeShop.backend.model.Product;
import com.coffeeShop.backend.repository.CommentRepository;
import com.coffeeShop.backend.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/comment")
public class CommentController
{
    @Autowired
    private CommentService commentService;


    @PostMapping("/commentProduct/{productID}")
    public Comment commentProduct(@RequestBody Comment commentToBeAdded,@PathVariable UUID productID){
        return commentService.commentProduct(commentToBeAdded,productID);
    }


    @GetMapping("/getApprovedProductComments/{productID}")
    public List<Comment> getProductComments(@PathVariable UUID productID) {
        List<Comment> approvedProductCommands = commentService.getApprovedProductComments(productID);
        return approvedProductCommands;
    }

}
