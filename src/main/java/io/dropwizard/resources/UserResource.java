package io.dropwizard.resources;

import com.fasterxml.jackson.annotation.JsonView;
import io.dropwizard.View;
import io.dropwizard.auth.Auth;
import io.dropwizard.models.User;
import io.dropwizard.services.UserService;

import javax.annotation.security.RolesAllowed;
import javax.inject.Singleton;
import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.Collection;
import java.util.List;

@Singleton
@Path("/user")
@Produces(MediaType.APPLICATION_JSON)
public class UserResource {
    UserService service = new UserService();

    @GET
    @JsonView(View.Public.class)
    @RolesAllowed("GUEST")
    public String getPersoon(){
        return "LOL xD";
    }

    @GET
    @Path("/login")
    @JsonView(View.Public.class)
    public User logIn(@Auth User user){
        System.out.println(user.getWachtwoord());
        return user;
    }

    @POST
    @Path("/registreer")
    @Consumes(MediaType.APPLICATION_JSON)
    @JsonView(View.Public.class)
    public void registreer(@Valid User user){
        service.add(user);
    }

    @GET
    @Path("/getall")
    @JsonView(View.Public.class)
    public List<User> getAll(){
        return this.service.getAll();
    }
}
