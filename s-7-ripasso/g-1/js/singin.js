let pulsante = document.querySelector(".btn");

let allValue = document.querySelectorAll(".form-control");

let errore = document.querySelector(".avviso");

pulsante.addEventListener("click", function (e) {

    formValido = true;

    e.preventDefault();
    
    
    let [nome, cognome, email, password, indirizzo, citta, zip] = allValue


    let esperimento = localStorage.getItem('utentiSalvati');
    let esperimento2 = JSON.parse(esperimento);
    let emailUtenti = [];

    esperimento2.forEach(function(elemento){
        elemento.email;
        emailUtenti.push(elemento.email);
    })
    emailUtenti.forEach(function(elemento){
        if(elemento == email.value){
            email.nextElementSibling.textContent = 'Questa mail è gia stata utilizzata!'
            formValido = false;
        }
    });

    
    allValue.forEach(function (elemento) {
        if (elemento.value == "") {
            elemento.nextElementSibling.textContent = "Richiesto"
            formValido = false;
        } else {
            elemento.nextElementSibling.textContent = ""
            
        }
    });

    if (formValido) {
        var nuovoUtente = new utente(nome.value, cognome.value, email.value, password.value, indirizzo.value, citta.value, zip.value)
        salvaDati(nuovoUtente);
        history.pushState({}, '', "login.html") //metodo per creare una "cronologia", in modo da poter tornare indietro nel caso in cui ci si sbagli          
        location.href = "login.html"//metodo alternativo a windows.open
    } else {
        console.log("mancano dati")
    }
});




function salvaDati(aggiungi) {

    let user = localStorage.getItem('utentiSalvati')
    let dataBase = user ? JSON.parse(user) : []
    dataBase.push(aggiungi)
    localStorage.setItem('utentiSalvati', JSON.stringify(dataBase));
    
}
    class utente {
        constructor(
            nome, cognome, email, password, indirizzo, citta, zip
        ) {
            this.nome = nome;
            this.cognome = cognome;
            this.email = email;
            this.password = password;
            this.indirizzo = indirizzo;
            this.citta = citta;
            this.zip = zip;
        }

    }

