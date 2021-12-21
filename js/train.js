/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


Analisi traccia:
1-Chiediamo all'utente quanti km vuole percorrere
2-Chiediamo l'età dell'utente
3-Calcolo il prezzo
    - 0.21 al km
    - sconto del 20% ai minori d'età x < 18
    - sconto del 40% per gli anziani x > 65
4-Il prezzo va presentato con massimo due decimali.

*/


const kmTravel = prompt('Quanti KM vuoi percorrere').trim()
console.log('kmTravel', kmTravel)

const userAge = prompt('Quanti anni hai?').trim()
console.log('userAge', userAge)

const ticketPrice = (kmTravel * 0.21).toFixed(2)

// condizioni per poter comprare il biglietto 
if (isNaN(userAge) || isNaN(kmTravel)) {
    alert('Devi scrivere un numero')
} else {
    const ticketPrice = (kmTravel * 0.21).toFixed(2)
    console.log(`Il costo del biglietto è ${ticketPrice}`)
    const ticketElement = document.getElementById('ticket')
    ticketElement.innerText = ` Il costo del biglietto è di ${ticketPrice}€`
}



// prezzi scontati
if (userAge < 18) {
    const underAge = (ticketPrice / 100) * 20;
    const ticketForSale = (ticketPrice - underAge).toFixed(2);
    console.log(`Il prezzo del biglietto per i minori di 18 anni è ${ticketForSale}€`)
    const ticketElement = document.getElementById('ticket');
    ticketElement.innerText = (`Il prezzo del tuo biglietto è di ${ticketForSale}€`)
} else {
    (userAge > 65)
    const overAge = (ticketPrice / 100) * 40;
    const ticketForSale = (ticketPrice - overAge).toFixed(2)
    console.log(`Il prezzo del biglietto per i maggiori di 65 anni è ${ticketForSale}€`)
    const ticketElement = document.getElementById('ticket');
    ticketElement.innerText = `Il prezzo del tuo biglietto è di ${ticketForSale}€`
}
