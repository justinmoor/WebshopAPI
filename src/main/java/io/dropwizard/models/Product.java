package io.dropwizard.models;

public class Product {

    private int id;
    private String naam;
    private String beschrijving;
    private double prijs;
    private int aantal;
    private String path;


    public Product(int id, String naam, String beschrijving, double prijs, int aantal, String path){
        this.id = id;
        this.naam = naam;
        this.beschrijving = beschrijving;
        this.prijs = prijs;
        this.aantal = aantal;
        this.path = path;
    }

    public Product(){

    }

    public String getPath(){
        return this.path;
    }

    public void setPath(String path){
        this.path = path;
    }

    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }

    public String getBeschrijving() {
        return beschrijving;
    }

    public void setBeschrijving(String beschrijving) {
        this.beschrijving = beschrijving;
    }

    public double getPrijs() {
        return prijs;
    }

    public void setPrijs(double prijs) {
        this.prijs = prijs;
    }

    public int getAantal() {
        return aantal;
    }

    public int getId(){
        return this.id;
    }

    public void setAantal(int aantal) {
        this.aantal = aantal;
    }


}
