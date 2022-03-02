//assegnazione variabili
var nome = $('#nome');
var email1 = $('#email-1');
var email2 = $('#email-2');
var iscriviti = $('#iscr-news');
var pulisci = $('#pulisci-form');

$(document).ready(function () {
    $(iscriviti).click(function () {
        nome = $('#nome').val();
        email1 = $('#email-1').val();
        email2 = $('#email-2').val();
        let isValid = true;
        //let campi = $('#form-email input[type='text']');
        /*createImageBitmap.each(function(indice, elemento){
            if(elemento.val() == ''){
                $(elemento).next().text('* Richiesto!');
                isValid = false;
            }else{
                $(elemento).next().text();
            }
        });*/

        if (nome == '' || nome === '') {
            $('#nome').css('border', '2px solid red');
            $('#nome').next('span').text('* richiesto!').css({
                'color': 'red',
                'display': 'inline'
            }).fadeOut(2000);
            console.log('i dati inseriti non sono corretti!');
            isValid = false;

        } else if (!(nome == '') || !(nome === '')) {
            $('#nome').css('border', '2px solid green');
            console.log('ok');
        }
        if (email1 == '' || email1 == 'undefined') {
            $('#email-1').css('border', '2px solid red');
            $('#email-1').next('span').text('* richiesto!').css({
                'color': 'red',
                'display': 'inline'
            }).fadeOut(2000);
            console.log('i dati inseriti non sono corretti!');
            isValid = false;

        } else if (!(email1 == '') || !(email1 == 'undefined')) {

            $('#email-1').css('border', '2px solid green');
            console.log('ok');

        }
        if (!(email2 == email1) || email2 == '') {
            $('#email-2').css('border', '2px solid red');
            $('#email-2').next('span').text('* richiesto!').css({
                'color': 'red',
                'display': 'inline'
            }).fadeOut(2000);
            isValid = false;
            console.log('i dati non combaciano!');

        } else if (email2 == email1 && !(email2 == '')) {

            $('#email-2').css('border', '2px solid green');
            console.log('ok');

        }

        if (isValid) {
            $('#form-email').submit()
        }

        function verificatore() {
            if (email2 == email1 && email2 === email1 && !(email2 == '') && !(email1 == '')) {
                alert('Ti sei iscritto !!!');
            } else if (!(email2 == email1) && !(email2 === email1) || email1 == '') {
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
    let input = $('#form-email input[type="text"]').val();
    $(pulisci).click(function () {
        if (input == String || input == Number) {
            $(input).remove();
        }
    });
});