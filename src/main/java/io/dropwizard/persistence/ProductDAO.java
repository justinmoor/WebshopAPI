package io.dropwizard.persistence;

import io.dropwizard.models.Product;

import java.util.ArrayList;
import java.util.List;

public class ProductDAO {

    private List<Product> producten;
    Product product1;
    Product product2;
    Product product3;
    Product product4;


    String path = "spel1.jpg";

    public ProductDAO(){
        producten = new ArrayList<>();
        product1 = new Product("F-Zero", "Vet gap", 20.99, 3, path);
        product2 = new Product("Contra III: The Alien Wars", "Vet gast", 20.99, 3, "spel2.jpg");
        product3 = new Product("Last Action Hero", "Nice gap", 20.99, 3, "spel3.jpg");
        product4 = new Product("Super Mario Kart", "Nice gast", 20.99, 3, "spel4.jpg");


        producten.add(product1);
        producten.add(product2);
        producten.add(product3);
        producten.add(product4);

    }

    public List<Product> getAll(){
        return producten;
    }

}
