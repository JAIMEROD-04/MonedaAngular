package com.mx.MS_Moneda.Dominio;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "HU_CAT_MONEDA")
@IdClass(MonedaId.class)
@Data
public class Moneda {
    @Id
    private int numCia;
    @Id
    private String claveMoneda;
    private String descripcion; // Corregido el nombre del campo
    private String simbolo; // Cambiado a String para simbolo de moneda
    private String abreviacion;
    private String monedaCorriente;
    private String status;
}
