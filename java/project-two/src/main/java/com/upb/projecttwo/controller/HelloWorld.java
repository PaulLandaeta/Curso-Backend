package com.upb.projecttwo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@ResponseBody
public class HelloWorld {

    @GetMapping("/hello/{id}/{apellido}")
    public String hello(@PathVariable String id, @PathVariable String apellido){
        return "Hola " + id+ " "+ apellido;

    }
    @GetMapping("/getEmail")
    public String user(@RequestParam String nombre, @RequestParam(name ="email", required = false) String correo) {
        return "este es el correo del usuario" + nombre +" "+ correo;
    }
}
