package io.dropwizard.services;

import io.dropwizard.models.Product;
import io.dropwizard.persistence.DAO.ProductDAO;

import java.util.Collection;

public class ProductService {

    private ProductDAO dao;

    public ProductService(){
        dao = new ProductDAO();
    }

    public Collection<Product> getAll(){
        return dao.getAll();
    }
}
