package com.ismael.sysPersonas.controller;

import com.ismael.sysPersonas.model.Pessoas;
import com.ismael.sysPersonas.services.PessoasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class PessoasController {
    @Autowired
    PessoasService pessoasService;
    @GetMapping
    public String getAllPessoas(){
        return "index";
    }

    @GetMapping("v1/pessoas")
    public String getPessoas(Model model){
        model.addAttribute("listaPessoas",pessoasService.getAllPessoas());
        return "cadastro";
    }

    @GetMapping("v1/pessoas/cadastrar")
    public  String addPessoa(Model model){
        Pessoas pessoa = new Pessoas();
        model.addAttribute("cadastrarPessoa",pessoa);
        return "cadastroPessoaForm";
    }

    @PostMapping("/salvarPessoa")
    public String salvarFuncionario(@ModelAttribute("cadastrarPessoa") Pessoas pessoa, BindingResult result){
        pessoasService.addPessoa(pessoa);
        return "redirect:/";
    }


}
