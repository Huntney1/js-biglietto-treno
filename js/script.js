// esercizio di oggi: calcolo del prezzo del biglietto del treno

// - 1 Dichiarare il numero di chilometri che si vogliono percorrere;
// - 2 Dichiarare l'età del passeggero;
// - 3 concatena le 2 informazioni per calcolare il prezzo del viaggio;
// - 4 secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km);
//    - 4.1 per i minorenni va applicato uno sconto del 20%;
//    - 4.2 per gli over 65 va applicato uno sconto del 40%;
// - 5 inserire l'output del prezzo finale all'esterno. 

// - 1 Dichiarare il numero di chilometri che si vogliono percorrere;
let numkm = prompt("Dichiarare il numero di chilometri che si vogliono percorrere");

// - 2 Dichiarare l'età del passeggero;
let eta = prompt("Dichiarare l'età del passeggero");

// - 3 concatena le 2 informazioni per calcolare il prezzo del viaggio;
let somma = numkm + eta;

// - 4 secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km);
const tiket = 0.21;

// - 4.1 per i minorenni va applicato uno sconto del 20%;
if (eta <= 17) {
    console.log('per i minorenni di ' + eta / tiket - 20 * 100 );
}
// - 4.2 per gli over 65 va applicato uno sconto del 40%;
else if (eta >= 65) {
    console.log('per i minorenni di ' + eta / tiket - 40 * 100 );
}
// - 5 inserire l'output del prezzo finale all'esterno. 
document.getElementById("psw").innerHTML = `la tua pasword è ${somma}`;
console.log(`la tua pasword è ${somma}`)