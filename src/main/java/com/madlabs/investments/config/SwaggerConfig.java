/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.madlabs.investments.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import static springfox.documentation.builders.PathSelectors.regex;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 *
 * @author deepa
 */
@EnableSwagger2
@Configuration
@ComponentScan("com.madlabs.investments.controllers")
public class SwaggerConfig {
    /**
     * Bean for swagger documentation generation and component scanning.
     * @return Docket - Used by Swagger
    */
    @Bean
    public Docket productApi() {
        return new Docket(DocumentationType.SWAGGER_2)
             .select()
             .apis(RequestHandlerSelectors
                .basePackage("com.madlabs.investments.controllers"))
             .paths(regex("/.*"))
             .build()
             .apiInfo(metaData());
    }
    
    /**
     * Called by productApi bean for generating swagger metadata.
     * @return ApiInfo - return metatdata
     */
    private ApiInfo metaData() {
        ApiInfo apiInfo = new ApiInfo(
                "Quotes Service",
                "Rest api for quotes for stocks, mutual funds, currency etc",
                "1.0",
                "Terms of service",
                new Contact("Deepak Kumar",
                    "https://psrocks.com",
                    "deepakk87@gmail.com"),
               "Apache License Version 2.0",
                "https://www.apache.org/licenses/LICENSE-2.0");
        return apiInfo;
    }
}
