package io.dropwizard.persistence;

import io.dropwizard.models.User;

import java.util.ArrayList;
import java.util.List;

public class UserDAO {

    private List<User> users;
    User user1;
    public UserDAO() {
        user1 = new User("Justin", "Moor", "justin-804@hotmail.com", "abc123");
        users = new ArrayList<>();
        users.add(user1);
    }

    public void add(User user){
        users.add(user);
    }

    public List<User> getAll()
    {
        return users;
    }


}
