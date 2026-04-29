package org.acme; //패키지선언

import jakarta.ws.rs.GET; //import문
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/hello") //어노테이션 
public class GreetingResource {

    @GET //어노테이션
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() { //메서드(객체 안에 함수) 선언
        return "Hello from Quarkus REST"; //리턴문
    }
}
