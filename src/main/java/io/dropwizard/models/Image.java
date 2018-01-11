package io.dropwizard.models;

public class Image {

    private String base64;
    private String naam;

    public Image(){

    }

    public Image(String base64, String naam){
        this.base64 = base64;
        this.naam = naam;
    }

    public String getBase64() {
        return base64;
    }

    public void setBase64(String base64) {
        this.base64 = base64;
    }

    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }
}
