var bottone = document.querySelector('#bottone');

bottone.addEventListener('click', function(){
    let aggiunta = '<i class="fa-solid fa-right-long-to-line"></i>' + ' ' + document.querySelector('#aggiunta').value ;
    let lista = document.querySelector('#lista');

    let li = document.createElement('li');
    li.innerHTML = aggiunta;

    li.addEventListener('click', function(){
        li.remove();
        rimuoviElementodaDb(li);
    });

    lista.append(li);
    document.querySelector('#aggiunta').value = '';

    salvaDatiNelDb(aggiunta);
});

function creaHTML(){
    let elementiSalvati = JSON.parse(localStorage.getItem('elementiSalvati'))

    elementiSalvati.forEach(function(elemento){
        let li = document.createElement('li');
        li.innerHTML = elemento;
    
        li.addEventListener('click', function(){
            li.remove();
            rimuoviElementodaDb(li);
        });
    
        lista.append(li);
    });
}
creaHTML();

//con questa funzione salvo e aggiorno i dati in localstorage
 function salvaDatiNelDb(aggiunta){

    /*salvataggio dati*/
    
        /* versione estesa
        if( localStorage.getItem('elementiSalvati') == null ){
            var db = [aggiunta]
        }else{
        var db = JSON.parse(localStorage.getItem('elementiSalvati'))
        db.push(aggiunta)
    }
    */

    var ls = localStorage.getItem('elementiSalvati')
    
    var db = ls ? JSON.parse(ls) : []
    db.push(aggiunta)
    
    localStorage.setItem('elementiSalvati',JSON.stringify(db))
}

//con questa funzione rimuovo un elemento da localstorage
function rimuoviElementodaDb(el){

    let ls = localStorage.getItem('elementiSalvati')
    let db = JSON.parse(ls)

    let indiceElemento = db.indexOf(el.innerHTML)

    db.splice(indiceElemento,1)

    localStorage.setItem('elementiSalvati',JSON.stringify(db))
}