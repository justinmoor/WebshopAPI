package io.dropwizard.services;

import io.dropwizard.models.User;
import io.dropwizard.persistence.UserDAO;

import java.util.Collection;

public class UserService {
    private UserDAO dao = new UserDAO();

    public UserService(){

    }

    public void add(User user){
        dao.add(user);
    }

    public User getPersoon(String email){
        return dao.getByEmailaddress(email);
    }

    public Collection<User> getAll()
    {
        return dao.getAll();
    }

}
