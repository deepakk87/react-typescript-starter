package com.madlabs.investments.controllers;


import com.madlabs.investments.models.User;
import com.madlabs.investments.repository.UsersRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author deepa
 */
@RestController
@RequestMapping("/users")
public class UsersController {
    
    @Autowired
    private UsersRepository repository;
    @RequestMapping
    public List<User> getUsers(){
        return repository.findAll();
    }
    
    @RequestMapping("/create")
    public User createUser(@RequestBody User user){
        return repository.insert(user);
    }
}
