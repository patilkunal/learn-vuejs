package com.example.demo.models.dto;

import com.example.demo.models.entities.User;
import com.example.demo.models.entities.UserRole;

import java.util.List;

public class UserDTO {

    private String username;
    private String email;

    private List<String> roles;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    public List<String> getRoles() {
        return roles;
    }

    public static UserDTO mapUser(User user) {
        UserDTO u = new UserDTO();
        u.setUsername(user.getUsername());
        u.setEmail(user.getEmail());
        u.setRoles(user.getRoles().stream().map(UserRole::getRolename).toList());
        return u;
    }

}
