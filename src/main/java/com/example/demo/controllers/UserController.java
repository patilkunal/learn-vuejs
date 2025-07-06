package com.example.demo.controllers;

import com.example.demo.services.UserService;
import com.example.demo.models.dto.UserDTO;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/rest/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService service) {
        this.userService = service;
    }

    @GetMapping
    public List<UserDTO> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("{username}")
    public UserDTO getUser(@PathVariable("username") String username) {
        return userService.getUser(username);
    }

    @PutMapping("{username}")
    public UserDTO updateUser(@PathVariable("username") String username, @RequestBody UserDTO userDTO) {
        userService.saveUser(userDTO);
        return userService.getUser(userDTO.getUsername());
    }

}
