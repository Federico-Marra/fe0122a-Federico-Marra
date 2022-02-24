var date = new Date();
            document.write(date + '<br>');

            var dateCustom = new Date('10, october, 2009');
            document.getElementById('full-data').innerHTML = dateCustom;
            var giorno = dateCustom.getDate();
            document.write(dateCustom);
            console.log(giorno);
            document.getElementById('giorno').innerHTML = 'Giorno: ' + giorno;

            var mese = dateCustom.getMonth();
            document.getElementById('mese').innerHTML = 'Mese: ' + mese;

            var anno = dateCustom.getFullYear();
            document.getElementById('anno').innerHTML = 'Anno: ' + anno;

            var gironoS = dateCustom.getDay();
            document.getElementById('giorno-sett').innerHTML = 'Giorno della settimana: ' + gironoS;

            
            