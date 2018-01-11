package io.dropwizard.models;

import com.fasterxml.jackson.annotation.JsonView;
import io.dropwizard.View;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;

import java.security.Principal;

public class User implements Principal{

    private int id;

    @JsonView(View.Public.class)
    private String voornaam;

    @JsonView(View.Public.class)
    private String achternaam;

    @JsonView(View.Public.class)
    private String email;

    @JsonView(View.Public.class)
    private String wachtwoord;

    private boolean admin;

    public User(int id, String voornaam, String achternaam, String email, String wachtwoord, boolean admin){
        this.id = id;
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.email = email;
        this.wachtwoord = wachtwoord;
        this.admin = admin;
    }

    public User(){

    }

    public String getVoornaam() {
        return voornaam;
    }

    public void setVoornaam(String voornaam) {
        this.voornaam = voornaam;
    }

    public String getAchternaam() {
        return achternaam;
    }

    public void setAchternaam(String achternaam) {
        this.achternaam = achternaam;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getWachtwoord() {
        return wachtwoord;
    }

    public void setWachtwoord(String wachtwoord) {
        this.wachtwoord = wachtwoord;
    }

    public int getId(){
       return this.id;
    }

    @Override
    public String getName() {
        return null;
    }

    public boolean getAdmin(){
        return this.admin;
    }

    public void setAdmin(boolean admin){
        this.admin = admin;
    }
}
