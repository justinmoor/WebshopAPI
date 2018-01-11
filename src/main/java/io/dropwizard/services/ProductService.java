package io.dropwizard.services;

import io.dropwizard.models.Winkelwagen;
import io.dropwizard.models.Image;
import io.dropwizard.models.Product;
import io.dropwizard.persistence.DAO.ProductDAO;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.Base64;
import java.util.Collection;
import java.util.Comparator;

public class ProductService {

    private ProductDAO dao;

    public ProductService() {
        dao = new ProductDAO();
    }

    public Collection<Product> getAll() {
        return dao.getAll();
    }

    public void add(Product product) {
        dao.add(product);
    }

    public void upload(Image image) {
        String pathFile = "C:\\Users\\justi\\Documents\\School\\Jaar 2\\iprwc\\images\\" + image.getNaam();
        try (FileOutputStream imageOutFile = new FileOutputStream(pathFile)) {
            // Converting a Base64 String into Image byte array
            byte[] imageByteArray = Base64.getDecoder().decode(image.getBase64());
            imageOutFile.write(imageByteArray);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException ioe) {
            System.out.println("Exception while reading the Image " + ioe);
        }
    }

    public void verwijder(Product product) {
        dao.verwijder(product);
    }

    public void checkOut(Winkelwagen item)  {
        Product[] producten = item.getProducten();
        for(Product p : producten){
            dao.checkOut(p.getId(), 1);
            try {
                Thread.sleep(100);
            } catch (InterruptedException e){
                e.printStackTrace();
            }
        }


//        Arrays.sort(producten, Comparator.comparing(Product::getId));
//
//        int count = 0;
//        System.out.println("hoi");
//
//        for (int i = 0; i < producten.length - 1; i++) {
//            System.out.println("test");
//            if (producten[i].getId() == producten[i + 1].getId()) {
//                count++;
//                System.out.println(count);
//            } else {
//                System.out.println("DEBUG");
//                dao.checkOut(producten[i].getId(), count);
//                count = 0;
//                //    Thread.sleep(500);
//            }



    }
}

