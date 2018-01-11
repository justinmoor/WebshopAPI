package io.dropwizard.persistence.DAO;

import io.dropwizard.models.Product;
import io.dropwizard.persistence.ConnectionPool;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ProductDAO {

    private List<Product> producten;
    private ConnectionPool pool;

    public ProductDAO(){
        this.pool = new ConnectionPool("org.mariadb.jdbc.Driver","jdbc:mariadb://localhost:3306:/webshop", "root", "ipsen123");

    }

    public void add(Product product){
        Connection con = pool.checkout();
        try {
            PreparedStatement statement = con.prepareStatement("INSERT INTO producten (naam, beschrijving, prijs, aantal, image_path) VALUES (?, ?, ?, ?, ?)");
            statement.setString(1, product.getNaam());
            statement.setString(2, product.getBeschrijving());
            statement.setDouble(3, product.getPrijs());
            statement.setInt(4, product.getAantal());
            statement.setString(5, product.getPath());
            statement.executeQuery();
        } catch(SQLException e){
            e.printStackTrace();
            pool.checkIn(con);
        }
    }

    public List<Product> getAll(){
        ResultSet results;
        List<Product> allProducts = new ArrayList<>();
        Connection con = pool.checkout();

        try{
            PreparedStatement statement = con.prepareStatement("SELECT * FROM producten;");
            results = statement.executeQuery();
            pool.checkIn(con);

            while(results.next()){
                allProducts.add(new Product(results.getInt("id"), results.getString("naam"), results.getString("beschrijving"), results.getDouble("prijs"), results.getInt("aantal"), results.getString("image_path")));
            }
        } catch(SQLException e){
            e.printStackTrace();
            pool.checkIn(con);
        }
        return allProducts;
    }

    public void verwijder(Product product){
        Connection con = pool.checkout();

        try{
            PreparedStatement statement = con.prepareStatement("DELETE from producten where id = ?");
            statement.setInt(1, product.getId());
            statement.execute();

        } catch(SQLException e){
            e.printStackTrace();
        }
    }

    public void checkOut(int id, int aantal){
        Connection con = pool.checkout();
   //     System.out.println(id);
        try{
            PreparedStatement statement = con.prepareStatement("UPDATE producten SET aantal = aantal - ? WHERE id = ?");
            statement.setInt(1, aantal);
            statement.setInt(2, id);
            statement.execute();
        } catch (SQLException e){
            e.printStackTrace();
        }
    }

}
