package com.web.storage.rest.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    // @CrossOrigin(origins="http://localhost:3000")
    @GetMapping("/test")
    public String main() {
        return "TEST";
    }

}