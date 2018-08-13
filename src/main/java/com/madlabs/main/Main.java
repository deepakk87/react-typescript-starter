package com.madlabs.main;

import com.madlabs.investments.config.ApiConfig;
import com.madlabs.investments.config.WebConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

@SpringBootApplication
@Configuration
@EnableMongoRepositories(basePackages = "com.madlabs.investments.repository")
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
    
    
    
    @Bean
    public ServletRegistrationBean api() {
        DispatcherServlet dispatcherServlet = new DispatcherServlet();

        AnnotationConfigWebApplicationContext applicationContext = new AnnotationConfigWebApplicationContext();
        applicationContext.register(ApiConfig.class);
        dispatcherServlet.setApplicationContext(applicationContext);

        ServletRegistrationBean servletRegistrationBean = new ServletRegistrationBean(dispatcherServlet, "/api/*");
        servletRegistrationBean.setName("api");
        return servletRegistrationBean;
    }
    
    @Bean
    public ServletRegistrationBean web() {
        DispatcherServlet dispatcherServlet = new DispatcherServlet();

        AnnotationConfigWebApplicationContext applicationContext = new AnnotationConfigWebApplicationContext();
        applicationContext.register(WebConfig.class);
        dispatcherServlet.setApplicationContext(applicationContext);

        ServletRegistrationBean servletRegistrationBean = new ServletRegistrationBean(dispatcherServlet, "/*");
        servletRegistrationBean.setName("web");
        return servletRegistrationBean;
    }
    
    
}