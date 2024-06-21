//Il programma dovrà mostrare una form da compilare usando i corretti campi HTML di input con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.Utilizzate Bootstrap come libreria UI.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km(0.21 € al km)
//va applicato uno sconto del 20 % per i minorenni
//va applicato uno sconto del 40 % per gli over 65.
//Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).


'use strict';

//operazioni di calcolo
const prezzoTicket = 0.21;
const fasciaMin = 18;
const scontoMin = 20;
const fasciaOver = 65;
const scontoOver = 40;


const kmUtente = document.getElementById('km-utente');
const etaUtente = document.getElementById('eta-utente');

console.log(kmUtente);
console.log(etaUtente);

const btnButton = document.getElementById('btn-button');
console.log(btnButton);

btnButton.addEventListener('click', function () {
    console.log('invio ticket');

    const valoreKm = Number(kmUtente.value);
    const valoreEta = Number(etaUtente.value);
    console.log(valoreKm);
    console.log(valoreEta);

    //calcolo
    let prezzoFinale = valoreKm * prezzoTicket;
    console.log(prezzoFinale);

    if (valoreEta < fasciaMin) {
        prezzoFinale -= (prezzoFinale * scontoMin) / 100;
    } else if (valoreEta > fasciaOver) {
        prezzoFinale -= (prezzoFinale * scontoOver) / 100;
    }
    console.log(prezzoFinale);


    kmStampa.innerText = `${valoreKm}`;
    scontoStampa.innerText = `${valoreEta}`;
    prezzoStampa.innerText = `${prezzoFinale.toFixed(2)}`;

    dNone.classList.remove('d-none');

});


//biglietto
const kmStampa = document.getElementById('km-stampa');
const scontoStampa = document.getElementById('sconto-stampa');
const prezzoStampa = document.getElementById('prezzo-stampa');
const dNone = document.querySelector('.d-none');


