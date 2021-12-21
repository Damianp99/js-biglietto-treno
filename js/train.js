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


