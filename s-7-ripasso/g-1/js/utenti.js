stampaUtente();

function stampaUtente() {
    var posizione = document.getElementById('utenti');
    var dataBase = localStorage.getItem('utentiSalvati');
    var arrayUtenti = JSON.parse(dataBase);

    arrayUtenti.forEach(function (element) {
        var tr = document.createElement('tr')
        posizione.prepend(tr);
        var trCreata = document.querySelector("tr")


        for (utentiSalvati in element) {
            var td = document.createElement('td')
            trCreata.prepend(td)
            document.querySelector("td").innerHTML = element[utentiSalvati]
        }
        var cancella = document.createElement("button")
        cancella.classList.add('cancellaUtente')
        cancella.innerHTML = 'elimina'
        trCreata.append(cancella)
        cancella.addEventListener('click', function () {
            tr.remove();
            eliminaUtente();

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
}