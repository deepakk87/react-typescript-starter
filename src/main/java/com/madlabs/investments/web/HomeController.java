package com.madlabs.investments.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping(value = {"/about", "/edit"})
    public String index() {
        return "forward:/";
    }
    
    @RequestMapping(value = {"/v2/api-docs"})
    public String swaggerDocs() {
        return "forward:/api/v2/api-docs";
    }
    
    @RequestMapping(value = {"/swagger-resources/configuration/ui"})
    public String swaggerConfig() {
        return "forward:/api/swagger-resources/configuration/ui";
    }
    
    @RequestMapping(value = {"/swagger-resources"})
    public String swaggerResources() {
        return "forward:/api/swagger-resources";
    }
    
    @RequestMapping(value = {"/swagger-resources/configuration/security"})
    public String swaggerSecurity() {
        return "forward:/api/swagger-resources/configuration/security";
    }
    
    
    
    
}
