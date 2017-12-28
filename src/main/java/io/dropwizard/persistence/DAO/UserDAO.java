package io.dropwizard.persistence.DAO;

import io.dropwizard.models.User;

import java.util.ArrayList;
import java.util.List;

public class UserDAO {

    private List<User> users;
    User user1;
    public UserDAO() {
        user1 = new User("Justin", "Moor", "a", "a");
        users = new ArrayList<>();
        users.add(user1);
    }

    public void add(User user){
        users.add(user);
    }

    public List<User> getAll(){
        return users;
    }

    public User getByEmailaddress(String username) {
        return user1;
    }
}
