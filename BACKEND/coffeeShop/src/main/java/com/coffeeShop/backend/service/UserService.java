package com.coffeeShop.backend.service;

import com.coffeeShop.backend.model.User;
import com.coffeeShop.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
public class UserService
{

    @Autowired
    private UserRepository userRepo;

    public List<User> getAllUsers(){
        List<User> allUsers =   userRepo.findAll();
        return allUsers;
    }

    public String registerUser(User userToBeRegistered)
    {
        userToBeRegistered.setId(UUID.randomUUID());
        userToBeRegistered = userRepo.save(userToBeRegistered);
        if(Objects.nonNull(userToBeRegistered))
        {
            return userToBeRegistered.getName()+" "+userToBeRegistered.getSurname()+" registered successfully";
        }
        else
            return "Couldn't register the user";
    }

    public boolean CanLogin(String email, String password)
    {
        for (User nCustomer : userRepo.findAll())
        {
            if (nCustomer.getEmail().equals(email) && nCustomer.getPassword().equals(password))
            {
                return true;
            }
        }
        return false;
    }

    public User returnCustomer(User userToLogin)
    {
        for (User nCustomer : userRepo.findAll())
        {
            if (nCustomer.getEmail().equals(userToLogin.getEmail()) && nCustomer.getPassword().equals(userToLogin.getPassword()))
            {
                User retUser = new User(nCustomer.getId(), nCustomer.getName(), nCustomer.getSurname(), nCustomer.getEmail(),
                        "-", nCustomer.getAddress(), nCustomer.getTaxId());
                return retUser;
            }
        }

        return null;
    }

}
