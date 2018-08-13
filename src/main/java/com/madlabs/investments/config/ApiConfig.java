/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.madlabs.investments.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

/**
 *
 * @author deepa
 */

@Configuration
@ComponentScan("com.madlabs.investments.controllers")   
public class ApiConfig extends WebMvcConfigurationSupport  {
    
}
