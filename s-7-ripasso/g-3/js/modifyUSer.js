let butt = document.querySelector("button");

let params = new URLSearchParams(document.location.search);
let idRicevutoString = params.get("id");
let idRicevuto = parseInt(idRicevutoString);

fetch("https://sofin.wp-admin.it/public/api/v1/user?id=" + idRicevuto)
  .then((response) => response.json()) //trasforma la risposta alla chiamata in un JSON
  .then((data) => {
    let spanId = document.querySelector("#id_user");
    spanId.innerText += " " + data[0].id;

    allInput = document.querySelectorAll("input");
    let [nom, cogn, mail, passw, r] = allInput;

    nom.value = data[0].name;
    cogn.value = data[0].lastname;
    mail.value = data[0].email;
    passw.value = data[0].password;
    r.value = data[0].role_id;

    butt.addEventListener("click", (evento) => {
      evento.preventDefault();

      const dataModified = {
        name: nom.value,
        lastname: cogn.value,
        email: mail.value,
        password:"$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
        role_id: r.value,

      };

      fetch("https://sofin.wp-admin.it/public/api/v1/user/" + idRicevuto, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataModified),
        })
        .then(() => {
            console.log("Success:", dataModified)
        })
           
        .then(() => {
            console.log("Success:", data)

            history.pushState({}, "", "dataBase.html");
            location.href = "dataBase.html";
        })
    });
  });

/*
butt.addEventListener("click", (evento) => {

    evento.preventDefault()

    const data = { 
        name: nom.value,
        lastname: cogn.value,
        email: mail.value,
        password: "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
        role_id: r.value
    };
  
    fetch('https://sofin.wp-admin.it/public/api/v1/user',
    {
       method: 'PUT', // per modificare una voce già presente nel file JSON
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify(data)
   })   

}) 
*/
