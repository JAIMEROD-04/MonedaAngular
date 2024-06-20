package com.mx.MS_Moneda.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mx.MS_Moneda.Dominio.Moneda;
import com.mx.MS_Moneda.Dominio.MonedaId;

public interface IMoneda extends JpaRepository<Moneda, MonedaId>{
    Moneda findByNumCiaAndClaveMonedaIgnoreCase(int numCia, String claveMoneda);

}
