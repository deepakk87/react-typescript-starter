package com.madlabs.investments.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping(value = {"/about", "/edit"})
    public String index() {
        return "forward:/";
    }
}
