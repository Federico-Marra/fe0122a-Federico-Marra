$(()=>{
    $('#start').click(function(){
        $('#loading').animate({
            width: '385px'
        }, {
            duration: 3000,
            easing: 'linear',
            step: function(x){
                $('#completato').text(Math.round(x * 100/ 385) + '%');
            },
            complete: function(){
                $('#completato').text('caricamento completato!');
            }

        });
    });
});
