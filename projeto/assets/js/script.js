$(document).ready(() => {

    $('section').load('pages/home.html')
    $('#menuHome').addClass('active')

    function clearClass(params) {
        $('#menuHome').removeClass('active')
        $('#menuJunte').removeClass('active')
        $('#botaoFaleConosco').removeClass('active')
        $('#menuOfertasVestuario').removeClass('active')
        $('#menuLancamentos').removeClass('active')
        $('#menuFeminino').removeClass('active')
        $('#menuMasculino').removeClass('active')
        $('#menuInfantil').removeClass('active')
        $('#menuSnkrsmenu').removeClass('active')
        $('#menuOfertas').removeClass('active')
        $('#botaoVerOfertas').removeClass('active')

    }

    $('#menuHome').click(() => {
        clearClass()
        $('#menuHome').addClass('pages/home.html')
        $('section').load('pages/home.html')
    })

    $('#menuJunte').click(() => {
        clearClass()
        $('#menuJunte').addClass('pages/junte.html')
        $('section').load('pages/junte.html')
    })

    $('#botaoFaleConosco').click(() => {
        clearClass()
        $('#botaoFaleConosco').addClass('pages/faleconosco.html')
        $('section').load('pages/faleconosco.html')
    })

    $('#menuOfertasVestuario').click(() => {
        clearClass()
        $('#menuOfertasVestuario').addClass('pages/ofertasvestuario.html')
        $('section').load('pages/ofertasvestuario.html')
    })

    $('#menuLancamentos').click(() => {
        clearClass()
        $('#menuLancamentos').addClass('pages/lançamentos.html')
        $('section').load('pages/lançamentos.html')
    })

    $('#menuFeminino').click(() => {
        clearClass()
        $('#menuFeminino').addClass('pages/feminino.html')
        $('section').load('pages/feminino.html')
    })

    $('#menuMasculino').click(() => {
        clearClass()
        $('#menuMasculino').addClass('pages/masculino.html')
        $('section').load('pages/masculino.html')
    })

    $('#menuInfantil').click(() => {
        clearClass()
        $('#menuInfantil').addClass('pages/infantil.html')
        $('section').load('pages/infantil.html')
    })

    $('#menuSnkrsmenu').click(() => {
        clearClass()
        $('#menuSnkrsmenu').addClass('pages/snkrs.html')
        $('section').load('pages/snkrs.html')
    })

    $('#menuOfertas').click(() => {
        clearClass()
        $('#menuOfertas').addClass('pages/ofertas.html')
        $('section').load('pages/ofertas.html')
    })


})
// funçãozinha JS//
//1º validando formulario //
function validar() {
    var formulario = document.forms['formulario']['inputNome'].value;
    if (formulario == '') {
        alert('O nome deve ser preenchido.');
        return false;
    }
    var formulario = document.forms['formulario']['inputEmail'].value;
    if (formulario == '') {
        alert('O email deve ser preenchido.');
        return false;
    }
    var formulario = document.forms['formulario']['inputAssunto'].value;
    if (formulario == '') {
        alert('O assunto deve ser preenchido.');
        return false;
    }
    var nome = document.querySelector('#inputNome').value;
    alert('Olá ' + nome + ', sua mensagem foi enviada!')
}
//2º ADICIONANDO AO CARRINHO //
function produtoCarrinho() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

//   parte dos tenis //
function produtoReserva() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

//3º RELOGIO (CONTAGEM REGRESSIVA) //

var countDownDate = new Date("Aug 25, 2022 15:37:25").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("contagem").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);