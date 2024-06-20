package com.mx.MS_Moneda.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mx.MS_Moneda.Dominio.Moneda;
import com.mx.MS_Moneda.Dominio.MonedaId;
import com.mx.MS_Moneda.Service.MonedaService;

@RestController
@RequestMapping(path = "/moneda")
@CrossOrigin("*")
public class MonedaWS {
    @Autowired
    private MonedaService service;

    @GetMapping
    public ResponseEntity<List<Moneda>> listar() {
        List<Moneda> monedas = service.getAll();
        if (monedas.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(monedas);
        }
    }

    @PostMapping
    public ResponseEntity<Moneda> guardar(@RequestBody Moneda moneda) {
        Moneda nuevo = service.save(moneda);
        return ResponseEntity.ok(nuevo);
    }

    @GetMapping("/{numCia}/{claveMoneda}")
    public ResponseEntity<Moneda> obtener(@PathVariable("numCia") int numCia, @PathVariable("claveMoneda") String claveMoneda) {
        Moneda moneda = service.getMoneda(numCia, claveMoneda);
        if (moneda == null) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(moneda);
        }
    }

    @PutMapping("/{numCia}/{claveMoneda}")
    public ResponseEntity<Moneda> actualizar(@PathVariable("numCia") int numCia, @PathVariable("claveMoneda") String claveMoneda, @RequestBody Moneda moneda) {
        Moneda update = service.update(numCia, claveMoneda, moneda);
        if (update == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(update);
        }
    }

    @DeleteMapping("/{numCia}/{claveMoneda}")
    public ResponseEntity<?> eliminar(@PathVariable("numCia") int numCia, @PathVariable("claveMoneda") String claveMoneda) {
        Moneda moneda = service.getMoneda(numCia, claveMoneda);
        if (moneda == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"Mensaje\": \"No se encontró la moneda.\"}");
        } else {
            service.delete(numCia, claveMoneda);
            return ResponseEntity.ok("{\"Mensaje\": \"La moneda se eliminó correctamente.\"}");
        }
    }
}
