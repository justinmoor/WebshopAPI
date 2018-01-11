package io.dropwizard.persistence.DAO;

import io.dropwizard.models.User;
import io.dropwizard.persistence.ConnectionPool;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UserDAO {

    private List<User> users;

    private ConnectionPool pool;

    public UserDAO() {
        this.pool = new ConnectionPool("org.mariadb.jdbc.Driver","jdbc:mariadb://localhost:3306:/webshop", "root", "ipsen123");

        users = new ArrayList<>();

    }

    public void add(User user){
        Connection con = pool.checkout();
        try {
            PreparedStatement statement = con.prepareStatement("INSERT INTO users (voornaam, achternaam, email, wachtwoord, admin) VALUES (?, ?, ?, ?, ?)");
            statement.setString(1, user.getVoornaam());
            statement.setString(2, user.getAchternaam());
            statement.setString(3, user.getEmail());
            statement.setString(4, user.getWachtwoord());
            statement.setBoolean(5, false);
            statement.executeQuery();
        } catch(SQLException e){
            e.printStackTrace();
            pool.checkIn(con);
        }
    }

    public User getByEmailaddress(String email) {
        User model = new User();
        try {
            Connection con = pool.checkout();
            PreparedStatement getGebruiker = con.prepareStatement("SELECT * FROM users WHERE email =?");
            getGebruiker.setString(1, email);

            ResultSet results = getGebruiker.executeQuery();
            pool.checkIn(con);

            if (results.next()) {
                model = new User(results.getInt("id"),results.getString("voornaam"), results.getString("achternaam"), results.getString("email"), results.getString("wachtwoord"), results.getBoolean("admin"));
            }
        } catch (SQLException e) {
            model = null;
            e.printStackTrace();
        }

        return model;
    }

    public List<User> getAll(){
        ResultSet resultSet;
        List<User> allUsers  = new ArrayList<>();
        Connection con = pool.checkout();

        try{
            PreparedStatement statement = con.prepareStatement("SELECT * FROM users;");
            resultSet = statement.executeQuery();
            pool.checkIn(con);

            while(resultSet.next()){
                allUsers.add(new User(resultSet.getInt("id"),resultSet.getString("voornaam"), resultSet.getString("achternaam"), resultSet.getString("email"), resultSet.getString("wachtwoord"), resultSet.getBoolean("admin")));

            }
        } catch (SQLException e){
            e.printStackTrace();
            pool.checkIn(con);
        }

        return allUsers;
    }
}


