package io.dropwizard.models;

import com.fasterxml.jackson.annotation.JsonView;
import io.dropwizard.View;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;

import java.security.Principal;

public class User implements Principal{

    @JsonView(View.Public.class)
    private String voornaam;

    @JsonView(View.Public.class)
    private String achternaam;

    @JsonView(View.Public.class)
    private String email;

    @JsonView(View.Public.class)
    private String wachtwoord;

    public User(String voornaam, String achternaam, String email, String wachtwoord){
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.email = email;
        this.wachtwoord = wachtwoord;
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

    @Override
    public String getName() {
        return null;
    }
}
