package com.example.demo.models.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "userroles")
public class UserRole {

    public UserRole() {}
    public UserRole(String username, String rolename) {
        this.username = username;
        this.rolename = rolename;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="username")
    private String username;

    @Column(name = "rolename")
    private String rolename;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRolename() {
        return rolename;
    }

    public void setRolename(String rolename) {
        this.rolename = rolename;
    }

    @Override
    public boolean equals(Object obj) {
        if(obj != null && obj.getClass().isAssignableFrom(UserRole.class)) {
            return this.id.equals(((UserRole)obj).id);
        } else return false;
    }

    @Override
    public int hashCode() {
        return this.id == null ? 37 : this.id.hashCode();
    }

}
