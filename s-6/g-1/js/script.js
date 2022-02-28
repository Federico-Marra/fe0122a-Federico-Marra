//assegnazione variabili
var nome = $('#nome');
var email1 = $('#email-1');
var email2 = $('#email-2');
var iscriviti = $('#iscr-news');
var pulisci = $('#pulisci-form');

$(document).ready(function () {
    $(iscriviti).click(function () {
        email1 = $('#email-1').val();
        email2 = $('#email-2').val();
        let invia = verificatore();

        if (nome.val() == '' || nome.val() === '') {

            $('#nome').css('border', '2px solid red');
            $('#nome').next('span').text('* richiesto!').css({
                'color': 'red',
                'display': 'inline'
            }).fadeOut(2000);
            console.log('i dati inseriti non sono corretti!');

        } else if (!(nome.val() == '') || !(nome.val() === '')) {

            $('#nome').css('border', '2px solid green');
            console.log('ok');

        }
        if (email1 == '' || email1 == 'undefined') {

            $('#email-1').css('border', '2px solid red');
            $('#email-1').next('span').text('* richiesto!').css({
                'color':'red',
                'display':'inline'
            }).fadeOut(2000);
            console.log('i dati inseriti non sono corretti!');

        } else if (!(email1 == '')|| !(email1 == 'undefined')) {

            $('#email-1').css('border', '2px solid green');
            console.log('ok');

        }
        if (!(email2 == email1) || email2 == '') {

            $('#email-2').css('border', '2px solid red');
            $('#email-2').next('span').text('* richiesto!').css({
                'color':'red',
                'display':'inline'
            }).fadeOut(2000);
            console.log('i dati non combaciano!');

        } else if (email2 == email1 && !(email2 == '')) {

            $('#email-2').css('border', '2px solid green');
            console.log('ok');

        }
        function verificatore(){
            if (email2 == email1 && email2 === email1 && !(email2 == '') && !(email1 == '')){
                alert('Ti sei iscritto !!!');
            }else if (!(email2 == email1) && !(email2 === email1) || email1 == ''){
                alert('Ops! Qualcosa è andato storto.. Contolla nuovamente i tuoi dati!');
            }
        }


        /*if(email1.val() !== email2.val() || email1.val() == ""){

            console.log('Non è corretto');

        }else if(email1.val() === email2.val()){

            prompt('ottimo');

        }*/
    });
});


$(document).ready(function () {
    let input = $('#form-email').next('input').val();
    $(pulisci).click(function () {
       if (input == 'text' || input == Number){
           $(input).remove();
       } 
    });
});