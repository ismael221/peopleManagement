package com.ismael.sysPersonas.repository;

import com.ismael.sysPersonas.model.Pessoas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PessoasRepository extends JpaRepository<Pessoas, Integer> {
            List<Pessoas> getPessoasByNomeContaining(String nome);
}
