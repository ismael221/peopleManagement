package com.ismael.sysPersonas.controller;

import com.ismael.sysPersonas.services.PessoasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/pessoas")
public class PessoasControllerRest {
    @Autowired
    PessoasService pessoasService;

    @GetMapping
    public ResponseEntity<List> getAllPessoas(){
        return  new ResponseEntity<>(pessoasService.getAllPessoas(), HttpStatus.OK);
    }


    @GetMapping("nome/{name}")
    public ResponseEntity<List> getPessoasByName(@PathVariable String name){
        return new ResponseEntity<>(pessoasService.getPessoasByName(name),HttpStatus.OK);
    }

}
