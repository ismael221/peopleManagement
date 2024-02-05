package com.ismael.sysPersonas.services;

import com.ismael.sysPersonas.model.Pessoas;
import com.ismael.sysPersonas.repository.PessoasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PessoasService {
    @Autowired
    PessoasRepository pessoasRepository;

    public Pessoas addPessoa(Pessoas pessoa){
        pessoasRepository.save(pessoa);
        return pessoa;
    }
    public Pessoas getPessoaPorId(int pessoaId){
        return pessoasRepository.findById(pessoaId).orElseThrow();
    }
    public List<Pessoas> getAllPessoas(){
        List<Pessoas> pessoasEncontradas = pessoasRepository.findAll();
        return pessoasEncontradas;
    }

    public void deletePessoas(int pessoaId){
        pessoasRepository.deleteById(pessoaId);
    }

    public List<Pessoas> getPessoasByName(String name){
        List<Pessoas> p = pessoasRepository.getPessoasByNomeContaining(name);
        return p;
    }
}
