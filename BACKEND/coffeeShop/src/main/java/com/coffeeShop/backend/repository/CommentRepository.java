package com.coffeeShop.backend.repository;

import com.coffeeShop.backend.model.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.UUID;

public interface CommentRepository extends MongoRepository<Comment,Integer>
{
    public List<Comment> findAllByProductIDAndCommentApproved (UUID productID, boolean commentApproveStatus);
}
