//efeito de esconder formulário de cadastro

$(document).ready(function () {

    $("#botao-cadastrar").click(function () {

        $("#form-cadastar").slideToggle("slow")
        $("#section-login").slideToggle("slow")
        $("#botao-cadastrar").hide();
    });
});
