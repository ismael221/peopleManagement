$(document).ready(function(){
    carregarPessoas();
    $("#cnpj").hide();
    $("#nomeFantasia").hide();
    $("#razaoSocial").hide();
    $('#telefone').mask('(00) 0 0000-0000');
    $('#cep').mask('00000-000');
    $('#cpf').mask('000.000.000-00');
    $('#cnpj').mask('00.000.000/0000-00');
    $('#valorTeste').keyup(function (){
        let nome = $(this).val();
        if (nome){
            carregarPessoasPorNome(nome);
        }else{
            carregarPessoas();
        }

    })
})

//Muda os campos conforme o tipo de pessoa selecionada
$("#tipoPessoa").on("change",function(){
    var opcao = $("#tipoPessoa option:selected").val();
    if(opcao == "juridica"){
        $("#cnpj").show()
        $("#cpf").hide()
        $("#nome").hide()
        $("#nomeFantasia").show()
        $("#razaoSocial").show()
    }else{
        $("#cnpj").hide()
        $("#cpf").show()
        $("#nomeFantasia").hide()
        $("#razaoSocial").hide()
        $("#nome").show()
    }
})
$("#cadPessoas").validate({
    rules:{
        nome:{
            required:true
        },
        cpf:{
            required:true
        },
        cnpj:{
            required:true
        },
        razaoSocial:{
            required:true
        },
        nomeFantasia:{
            required:true
        },
        rua:{
            required:true
        },
        cep:{
            required:true
        },
        cidade:{
            required:true
        },
        estado:{
            required:true
        },
        numero:{
            required:true
        },
        telefone:{
            required:true
        },
        email:{
            required:true,
            email:true
        }
    },
    messages: {
        nome: {
            required: "Campo nome é obrigatório",
        },
        cpf:{
            required:"Campo CPF é obrigatório"
        },
        email: {
            required: "Campo e-mail é obrigatório",
            email: "O e-mail deve estar no formato: xxx@xxxx.xxx"
        },
        cnpj:{
            required:"Campo CPNJ é obrigatório"
        },
        razaoSocial:{
            required:"Campo Razão Social é obrigátorio"
        },
        nomeFantasia:{
            required:"Campo Nome Fantasia é obrigátorio"
        },
        rua:{
            required:"Campo rua é obrigatorio"
        },
        cep:{
            required:"Campo CEP é obrigatorio"
        },
        cidade:{
            required:"Campo Cidade é obrigatorio"
        },
        estado:{
            required:"Campo estado é obrigatorio"
        },
        numero:{
            required:"Campo número é obrigatorio"
        },
        telefone:{
            required:"Campo telefone é obrigatorio"
        },
    }
});


function carregarPessoas(){
    $.ajax({
        url:'http://localhost:8080/api/v1/pessoas',
        method:'GET',
        success:function(data){
            $('#tabelaPessoas').empty();
            for (let i = 0; i < data.length; i++) {
                let pessoa = data[i];

                let id = $('<td>').text(pessoa.nome);

                let titulo = $('<td>').append(
                    $('<td>').text(pessoa.tipoPessoa)
                );

                let sinopse = $('<td>').append(
                    $('<td>').text(pessoa.tipoCadastro)
                );

                let tr = $('<tr>')
                    .attr('data-id', pessoa.id)
                    .append(id)
                    .append(titulo)
                    .append(sinopse);

                $('#tabelaPessoas').append(tr);
        }
        },
        error:function (){
           console.log("Erro")
        }

    })
}

function carregarPessoasPorNome(nome){
    $.ajax({
        url:'http://localhost:8080/api/v1/pessoas/nome/'+nome,
        method:'GET',
        success:function(data){
            console.log(data)
            $('#tabelaPessoas').empty();
            for (let i = 0; i < data.length; i++) {
                let pessoa = data[i];

                let id = $('<td>').text(pessoa.nome);

                let titulo = $('<td>').append(
                    $('<td>').text(pessoa.tipoPessoa)
                );

                let sinopse = $('<td>').append(
                    $('<td>').text(pessoa.tipoCadastro)
                );

                let tr = $('<tr>')
                    .attr('data-id', pessoa.id)
                    .append(id)
                    .append(titulo)
                    .append(sinopse);

                $('#tabelaPessoas').append(tr);
            }
        },
        error:function (){
            console.log("Erro")
        }

    })
}
