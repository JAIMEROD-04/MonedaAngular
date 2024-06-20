package com.mx.MS_Moneda.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.mx.MS_Moneda.Dao.IMoneda;
import com.mx.MS_Moneda.Dominio.Moneda;
import com.mx.MS_Moneda.Dominio.MonedaId;

@Service
public class MonedaService {
    @Autowired
    private IMoneda dao;

    public List<Moneda> getAll() {
        return dao.findAll(Sort.by(Sort.Direction.ASC, "numCia"));
    }

    public Moneda save(Moneda moneda) {
        return dao.save(moneda);
    }

    public Moneda getMoneda(int numCia, String claveMoneda) {
        return dao.findByNumCiaAndClaveMonedaIgnoreCase(numCia, claveMoneda);
    }

    public Moneda update(int numCia, String claveMoneda, Moneda moneda) {
        MonedaId id = new MonedaId(numCia, claveMoneda);
        if (dao.existsById(id)) {
            moneda.setNumCia(numCia);
            moneda.setClaveMoneda(claveMoneda);
            return dao.save(moneda);
        } else {
            return null;
        }
    }

    public void delete(int numCia, String claveMoneda) {
        MonedaId id = new MonedaId(numCia, claveMoneda);
        dao.deleteById(id);
    }
}
