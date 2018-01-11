package io.dropwizard.resources;

import com.fasterxml.jackson.annotation.JsonView;
import io.dropwizard.View;
import io.dropwizard.models.Winkelwagen;
import io.dropwizard.models.Image;
import io.dropwizard.models.Product;
import io.dropwizard.services.ProductService;

import javax.activation.MimetypesFileTypeMap;
import javax.inject.Singleton;
import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.File;
import java.util.Collection;

@Singleton
@Path("/producten")
@Produces(MediaType.APPLICATION_JSON)
public class ProductResource {

    private ProductService service;

    public ProductResource(){
        service = new ProductService();
    }

    @GET
    @Path("/all")
    @JsonView(View.Public.class)
    public Collection<Product> getAll(){
        return service.getAll();
    }

    @GET
    @Path("images/{image}")
    @Produces("image/*")
    public Response getImage(@PathParam("image") String image) {
        File f = new File("C:\\Users\\justi\\Documents\\School\\Jaar 2\\iprwc\\images\\" + image);
        if (!f.exists()) {
            throw new WebApplicationException(400);
        }
        String mt = new MimetypesFileTypeMap().getContentType(f);
        return Response.ok(f, mt).build();
    }

    @POST
    @Path("/toevoegen")
    @Consumes(MediaType.APPLICATION_JSON)
    @JsonView(View.Public.class)
    public void registreer(@Valid Product product){
        service.add(product);
    }

    @POST
    @Path("/uploadimage")
    @Consumes(MediaType.APPLICATION_JSON)
    @JsonView(View.Public.class)
    public void getBase64(@Valid Image image){
        service.upload(image);
    }

    @POST
    @Path("/verwijder")
    @Consumes(MediaType.APPLICATION_JSON)
    @JsonView(View.Public.class)
    public void verwijder(@Valid Product product){
        service.verwijder(product);
    }

    @POST
    @Path("/checkout")
    @Consumes(MediaType.APPLICATION_JSON)
    @JsonView(View.Public.class)
    public void checkOut(@Valid Winkelwagen cart){
        service.checkOut(cart);
    }

}
