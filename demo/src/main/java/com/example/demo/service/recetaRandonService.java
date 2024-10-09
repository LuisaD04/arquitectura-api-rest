package com.example.demo.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class recetaRandonService {

    private static final String API_KEY = "4bf2b3c42988474589bba54babf0e76d";
    private static final String API_URL = "https://api.spoonacular.com/recipes/random?apiKey=" + API_KEY;

    // Método para consultar una receta random de la API de Spoonacular
    public ResponseEntity<?> getRecetaRandom() {
        RestTemplate restTemplate = new RestTemplate();

        try {
            // Realizamos la solicitud GET al endpoint y obtenemos la respuesta
            ResponseEntity<String> response = restTemplate.getForEntity(API_URL, String.class);

            // Retornamos la respuesta directamente
            return ResponseEntity.ok(response.getBody());
        } catch (Exception e) {
            // En caso de error, retornamos un mensaje de error
            return ResponseEntity.status(500).body("Error al consultar la receta random: " + e.getMessage());
        }
    }
}
