package com.ismael.sysPersonas.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Pessoas {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String nome;
    private String razaoSocial;
    private String nomeFantasia;
    private String cpf;
    private String cnpj;
    private String tipoCadastro;
    private String tipoPessoa;
    private String email;
    private String telefone;
    private String rua;
    private String cep;
    private String cidade;
    private String estado;
    private int numero;
    private String complemento;

}
