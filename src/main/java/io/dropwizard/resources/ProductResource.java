package io.dropwizard.resources;

import com.fasterxml.jackson.annotation.JsonView;
import io.dropwizard.View;
import io.dropwizard.jersey.PATCH;
import io.dropwizard.models.Product;
import io.dropwizard.models.User;
import io.dropwizard.services.ProductService;

import javax.activation.MimetypesFileTypeMap;
import javax.inject.Singleton;
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
        File f = new File("C:\\Users\\justi\\Documents\\School\\Jaar 2\\iprwc\\WebshopAPI\\src\\main\\java\\io\\dropwizard\\assets\\" + image);
        if (!f.exists()) {
            throw new WebApplicationException(400);
        }
        String mt = new MimetypesFileTypeMap().getContentType(f);
        return Response.ok(f, mt).build();
    }


}
