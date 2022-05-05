package com.coffeeShop.backend.service;

import com.coffeeShop.backend.model.Cart;
import com.coffeeShop.backend.model.Category;
import com.coffeeShop.backend.model.Comment;
import com.coffeeShop.backend.model.User;
import com.coffeeShop.backend.repository.CommentRepository;
import com.coffeeShop.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
public class CommentService
{
    @Autowired
    private CommentRepository commentRepo;

    @Autowired
    private UserRepository userRepo;

    public Comment commentProduct(Comment commentToBeAdded, UUID productID)
    {
        User currentUser = userRepo.findById(commentToBeAdded.getUserID());
        String usersName = currentUser.getName() ;
        String usersSurname = currentUser.getSurname() ;
        commentToBeAdded.setNameSurname(usersName+" "+usersSurname);
        commentToBeAdded.setProductID(productID);
        commentToBeAdded.setCommentApproved(true);
        commentToBeAdded.setId(UUID.randomUUID());
        commentToBeAdded = commentRepo.save(commentToBeAdded);
        return commentToBeAdded;
    }

    public List<Comment> getApprovedProductComments(UUID productID)
    {
        List<Comment> productComments = commentRepo.findAllByProductIDAndCommentApproved(productID,true);

        if (Objects.nonNull(productComments)){
            return productComments;
        }
        else
            return new ArrayList<>();
    }
}
