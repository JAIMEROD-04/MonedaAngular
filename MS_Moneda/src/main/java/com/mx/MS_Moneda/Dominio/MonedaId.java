package com.mx.MS_Moneda.Dominio;

import java.io.Serializable;
import java.util.Objects;

public class MonedaId implements Serializable {
    private int numCia;
    private String claveMoneda;

    // Default constructor
    public MonedaId() {}

    // Parameterized constructor
    public MonedaId(int numCia, String claveMoneda) {
        this.numCia = numCia;
        this.claveMoneda = claveMoneda;
    }

    // Getters and setters
    public int getNumCia() {
        return numCia;
    }

    public void setNumCia(int numCia) {
        this.numCia = numCia;
    }

    public String getClaveMoneda() {
        return claveMoneda;
    }

    public void setClaveMoneda(String claveMoneda) {
        this.claveMoneda = claveMoneda;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MonedaId monedaId = (MonedaId) o;
        return numCia == monedaId.numCia && Objects.equals(claveMoneda, monedaId.claveMoneda);
    }

    @Override
    public int hashCode() {
        return Objects.hash(numCia, claveMoneda);
    }
}
