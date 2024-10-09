package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.example.demo.service.recetaRandonService;

@RestController
@RequestMapping("/receta")
@CrossOrigin(origins = "*")
public class RecetaRandonController {

    @Autowired
    recetaRandonService recetaRandonService;

    @GetMapping()
    public ResponseEntity<?> getMethodName() {
        try {
            return recetaRandonService.getRecetaRandom();

        } catch (Exception e) {

            return ResponseEntity.badRequest().body("error ");

        }
    }

}
