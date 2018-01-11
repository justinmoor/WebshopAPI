package io.dropwizard.models;

public class Winkelwagen {
    public Winkelwagen(){

    }

    private Product [] producten;

    public Winkelwagen(Product [] producten){
        this.producten = producten;
    }


    public Product[] getProducten() {
        return producten;
    }

    public void setProducten(Product[] producten) {
        this.producten = producten;
    }
}
