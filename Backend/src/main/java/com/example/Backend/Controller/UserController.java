package com.example.Backend.Controller;

import com.example.Backend.Model.User;
import com.example.Backend.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/auth")
public class UserController {

    @Autowired
    UserRepo userRepo;

    @PostMapping("/addUser")
    public Object addUserDetails(@RequestBody User user){
        userRepo.save(user);
        return user;
    }
}
