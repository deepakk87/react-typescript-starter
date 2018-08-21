/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.madlabs.tests;

import com.madlabs.investments.models.User;
import org.junit.Test;

import com.madlabs.investments.components.Point;

/**
 *
 * @author deepa
 */
public class LombokScalaTest {
    
 
    @Test
    public void testLombok(){
        // Able to use lombok for setter and getters
        User u = new User();
        u.setName("Deepak");
    }
    
    @Test
    public void testScala(){
        //Able to call scala class from Java
        Point u = new Point(6, 8);
    }
    
}
