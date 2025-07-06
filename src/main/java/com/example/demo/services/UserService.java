package com.example.demo.services;

import com.example.demo.dao.RolesRepository;
import com.example.demo.dao.UserRepository;
import com.example.demo.dao.UserRoleRepository;
import com.example.demo.models.dto.UserDTO;
import com.example.demo.models.entities.Role;
import com.example.demo.models.entities.User;
import com.example.demo.models.entities.UserRole;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class UserService {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);
    private final UserRepository dao;
    private final RolesRepository rolesDao;
    private final UserRoleRepository userRoleRepository;

    public UserService(UserRepository dao, UserRoleRepository urdao,  RolesRepository rdao) {
        this.dao = dao;
        this.rolesDao = rdao;
        this.userRoleRepository = urdao;
    }

    public List<UserDTO> getUsers(){
        List<User> entities  = dao.findAll();
        return entities.stream().map(UserDTO::mapUser).toList();
    }

    public UserDTO getUser(String username) {
        User user = dao.findByUsername(username).orElse(null);
        return user != null ? UserDTO.mapUser(user) : null;
    }

    @Transactional(propagation = Propagation.SUPPORTS)
    @Modifying
    public void saveUser(UserDTO user) {
        LOGGER.info("Trying to save user {}, {}, {}", user.getUsername(), user.getEmail(), user.getRoles());
        List<UserRole> existingroles = userRoleRepository.findByUsername(user.getUsername());
        if(existingroles == null) {
            existingroles = new ArrayList<>();
        }
        Iterator<UserRole> itr = existingroles.iterator();
        while(itr.hasNext()) {
            UserRole ur = itr.next();
            if( ! user.getRoles().contains(ur.getRolename()) ) {
                userRoleRepository.deleteById(ur.getId());
                itr.remove();
            }
        }
        List<String> updatedexisting = existingroles.stream().map(UserRole::getRolename).toList();
        for(String role: user.getRoles()) {
            if(!updatedexisting.contains(role)) {
                userRoleRepository.save(new UserRole(user.getUsername(), role));
            }
        }
        User existing = dao.findByUsername(user.getUsername()).orElse(null);
        if(existing == null) return;
        existing.setEmail(user.getEmail());
        dao.save(existing);
    }

    public List<String> getAllRoles() {
        return rolesDao.findAll().stream().map(Role::getRolename).toList();
    }
 }
