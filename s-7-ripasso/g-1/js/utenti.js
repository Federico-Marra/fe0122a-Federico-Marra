stampaUtente();

function stampaUtente() {
    var posizione = document.getElementById('utenti');
    var dataBase = localStorage.getItem('utentiSalvati');
    var arrayUtenti = JSON.parse(dataBase);


    arrayUtenti.forEach(function (element) {
        var tr = document.createElement('tr')
        posizione.append(tr);

        for (utentiSalvati in element) {
            var td = document.createElement('td')
            tr.append(td)
            td.innerHTML = element[utentiSalvati]
        }
        var cancella = document.createElement("button")
        cancella.classList.add('cancellaUtente')
        cancella.innerHTML = 'elimina'

        tr.append(cancella)
        
        cancella.addEventListener('click', function () {
            tr.remove();
            eliminaUtente();
        })

        var mostra = document.createElement('button')
        mostra.classList.add('mostraBtn')
        mostra.innerHTML = 'mostra'

        tr.append(mostra)

        mostra.addEventListener('click', function(){            
            let trpassword = document.querySelectorAll('tr:nth-child(3)'); 
            console.log(trpassword.value)
            
        })
})

    function eliminaUtente(user) {
        let ls = localStorage.getItem('utentiSalvati')
        let db = JSON.parse(ls);
        let indiceElemento = db.find(function (el) {
            return utentiSalvati.id == el.id
        })
        var indexElement = db.indexOf(indiceElemento)
        db.splice(indexElement, 1)
        localStorage.setItem('utentiSalvati', JSON.stringify(db))
    }
    function nascondi(){
        let tdE = localStorage.getItem('utentiSalvati')
        let data = JSON.parse(tdE);
        let eliminaTd = data.find(function (ele){
            return utentiSalvati.password
        })
        var indexTd = data.indexOf(eliminaTd)
        //data.splice(indexTd, 1)
        localStorage.setItem('utentiSalvati', JSON.stringify(data))
    }
}
