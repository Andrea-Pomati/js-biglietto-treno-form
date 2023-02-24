// // Descrizione:
// // Scrivere un programma che chieda all’utente:
// // - Il numero di chilometri da percorrere
// // - Età del passeggero
// // Sulla base di queste informazioni dovrà calcolare il prezzo totale del
//  biglietto di viaggio, secondo le seguenti regole:
// // - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// // - va applicato uno sconto del 20% per i minorenni
// // - va applicato uno sconto del 40% per gli over 65.
// // MILESTONE 1:
// // Iniziamo implementando il programma senza alcuna estetica:
//  usando esclusivamente due input e un bottone (non stilizzati),
//   realizziamo le specifiche scritte sopra. La risposta finale (o output)
//    sarà anch’essa da scrivere in console.
// // MILESTONE 2:
// // Solo una volta che il milestone 1 sarà completo e funzionante 
// allora realizzeremo un form in pagina 
// in cui l’utente potrà inserire i dati e visualizzare il calcolo finale 
// con il prezzo.
// // Il recap dei dati e l'output del prezzo finale, andranno quindi stampati 
// in pagina (il prezzo dovrà essere formattato con massimo due decimali, 
//     per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// // Nota:
// // Se non vi sentite particolarmente creativi, 
// questa potrebbe essere un’implementazione da seguire per il secondo milestone.
//  Potete scegliere di implementare una soluzione completamente diversa oppure
//   simile, ma in ogni caso cercate di farla vostra.



//pseudo codice esercizio parte prima delle milestone: 

/* 
- chiedo il numero di chilometri che vuole percorrere l'utente e lo memorizzo
- chiedo l'età del passeggero e la memorizzo
- calcolo il prezzo del viaggio:
    - 0,21 € al km variabile
- se ha meno di 18 anni 20% di sconto da applicare
- se ha più di 65 anni 40% di sconto da applicare
- risultato cioè il prezzo: massimo due decimali dopo la virgola
*/


/*
Milestone 1

- inserire due imput con "type" number

- inserire un bottone
- fare comparire in console

*/

// - chiedere e memorizzare numero di km e età dell'utente

let tripKmEl = document.getElementById("tripKm");
let userAgeEl = document.getElementById("userAge");


// prezzo per km 
let pricePerKm = 0.21;


let generateTicketButtonEl = document.getElementById("generateTicketButton");

generateTicketButtonEl.addEventListener('click', function() {

  // - calcoliamo il prezzo base del biglietto (km * 0.21)
  let baseTicketPrice = tripKmEl.value * pricePerKm;

  // dichiaro la variabile del prezzo finale
  let finalPrice;

  if(!isNaN(tripKmEl.value) && !isNaN(userAgeEl.value)) {

    let discount;


    // ? SE l'età è < 18
    if(userAgeEl.value < 18) {

      // ° prezzoFinale = prezzoBase - (prezzoBase / 100 * 20)
      finalPrice = baseTicketPrice - baseTicketPrice / 100 * 20;

      discount = '20%';
      console.log("prezzo scontato minorenni: " + finalPrice);

    } else if(userAgeEl.value >= 65) { //: ALTRIMENTI SE l'età è > 65

      finalPrice = baseTicketPrice - baseTicketPrice * 0.4;

      discount = "40%";
      console.log("prezzo scontato over65: " + finalPrice);

    } else { //: ALTRIMENTI 

      finalPrice = baseTicketPrice;

      discount = "nessuno";
      console.log("prezzo: " + finalPrice);
      
    }


    // - formatta prezzoFinale con due decimali
    finalPrice = finalPrice.toFixed(2);

    document.getElementById("ticket").style.display = "block";

    // let ticketKmEl = document.getElementById("ticketKm");
    document.getElementById("ticketKm").innerHTML = "Km del viaggio: " + tripKmEl.value;
    document.getElementById("ticketUserAge").innerHTML = "Età dell'utente: " + userAgeEl.value;
    document.getElementById("ticketDiscount").innerHTML = "Sconto applicato: " + discount;

    document.getElementById("ticketPrice").innerHTML = "Prezzo del biglietto: <strong>€" + finalPrice + "</strong>";

  } else {

    console.log("inserisci un numero in entrambi i campi!");
    
  }

  

});




document.getElementById("closeTicket").addEventListener("click", function() {
  
  document.getElementById("ticket").style.display = "none";
  tripKmEl.value = "";
  userAgeEl.value = "";

});













