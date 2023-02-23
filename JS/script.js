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

*/




//inizio

const prezzoKm = 0.21;

// km da percorrere

let kmDaPercorrere = parseInt (prompt  ("Quanti km vuoi percorrere?"))

// età

let etàPasseggero = parseInt (prompt  ("Quanti anni hai?"))

// prezzo biglietto

let prezzoBiglietto = prezzoKm * kmDaPercorrere


// sconto biglietto under 18 20%

let scontoBiglietto18 = prezzoBiglietto * 0.2

//calcolo degli sconti

const prezzoUnder18 = prezzoBiglietto - scontoBiglietto18

// sconto biglietto over 65 40%

let scontoBiglietto65 = prezzoBiglietto * 0.4

//calcolo degli sconti


const prezzoOver65 = prezzoBiglietto - scontoBiglietto65



if (etàPasseggero < 18) {

    prezzoBiglietto = prezzoUnder18.toFixed(2)
    
    document.writeln(`Il tuo biglietto costa ${prezzoBiglietto} €`);


}


else if (etàPasseggero >= 65) {

    prezzoBiglietto = prezzoOver65.toFixed(2)

    document.writeln(`Il tuo biglietto costa ${prezzoBiglietto} €`);

}

else {
    
    prezzoBiglietto = prezzoBiglietto.toFixed(2)

    document.writeln(`Il tuo biglietto costa ${prezzoBiglietto} €`);
}


