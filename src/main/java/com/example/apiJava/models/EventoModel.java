package com.example.apiJava.models;
import javax.persistence.*;

@Entity
@Table(name = "eventos")


public class EventoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "title")
    private String titulo;
    @Column(name = "date")
    private String fecha;
    @Column(name = "image")
    private String Imagen;
    @Column(name = "description")
    private String descripcion;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public String getFecha() {
        return fecha;
    }
    public void setFecha(String fecha) {
        this.fecha = fecha;
    }
    public String getImagen() {
        return Imagen;
    }
    public void setImagen(String imagen) {
        Imagen = imagen;
    }
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    
}
