$(document).ready(function(){


    $("#cnpj").hide()   
    $("#nomeFantasia").hide()
    $("#razaoSocial").hide()
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
        complemento:{
            required:true
        }
    }
});