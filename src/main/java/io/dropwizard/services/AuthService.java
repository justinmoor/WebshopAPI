package io.dropwizard.services;



import com.google.common.base.Optional;
import io.dropwizard.auth.AuthenticationException;
import io.dropwizard.auth.Authenticator;
import io.dropwizard.auth.basic.BasicCredentials;
import io.dropwizard.models.User;
import io.dropwizard.persistence.DAO.UserDAO;


public class AuthService implements Authenticator<BasicCredentials, User> {
    UserDAO dao = new UserDAO();
    public AuthService(){

    }
    @Override
    public Optional<User> authenticate(BasicCredentials basicCredentials) throws AuthenticationException {
        User persoon = dao.getByEmailaddress(basicCredentials.getUsername());

        // Controlleren op zowel email als wachtwoord.
        if (persoon != null && persoon.getWachtwoord().equals(basicCredentials.getPassword()) && persoon.getEmail().equals(basicCredentials.getUsername())){
            return Optional.of(persoon);
        }
        return Optional.absent();
    }
}
