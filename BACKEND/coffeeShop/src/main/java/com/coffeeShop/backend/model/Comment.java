package com.coffeeShop.backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Data
@Document(collection = "Comments")
public class Comment
{
    @Id
    private UUID id;

    private UUID userID;
    private UUID productID;
    private String nameSurname;
    private String comment;
    private boolean commentApproved;

    public Comment(UUID id, UUID userID, UUID productID, String nameSurname, String comment, boolean commentApproved) {
        this.id = id;
        this.userID = userID;
        this.productID = productID;
        this.nameSurname = nameSurname;
        this.comment = comment;
        this.commentApproved = commentApproved;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getUserID() {
        return userID;
    }

    public void setUserID(UUID userID) {
        this.userID = userID;
    }

    public UUID getProductID() {
        return productID;
    }

    public void setProductID(UUID productID) {
        this.productID = productID;
    }

    public String getNameSurname() {
        return nameSurname;
    }

    public void setNameSurname(String nameSurname) {
        this.nameSurname = nameSurname;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public boolean isCommentApproved() {
        return commentApproved;
    }

    public void setCommentApproved(boolean commentApproved) {
        this.commentApproved = commentApproved;
    }
}
