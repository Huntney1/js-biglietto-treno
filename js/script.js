// esercizio di oggi: calcolo del prezzo del biglietto del treno

// - 1 Dichiarare il numero di chilometri che si vogliono percorrere;
// - 2 Dichiarare l'età del passeggero;

// - 3 secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km);
//    - 3.1 per i minorenni va applicato uno sconto del 20%;
//    - 3.2 per gli over 65 va applicato uno sconto del 40%;
// - 4 inserire l'output del prezzo finale all'esterno. 

// - 1 Dichiarare il numero di chilometri che si vogliono percorrere;
let numkm = prompt("Dichiarare il numero di chilometri che si vogliono percorrere");

// - 2 Dichiarare l'età del passeggero;
let eta = prompt("Dichiarare l'età del passeggero");

// - 3 secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km);
let prezzoIntero = numkm * 0.21;

let prezzoFinale = prezzoIntero; 
// - 4.1 per i minorenni va applicato uno sconto del 20%;
if (eta <= 17) {
    prezzoFinale = prezzoIntero  * 0.8 ;
}
// - 4.2 per gli over 65 va applicato uno sconto del 40%;
else if (eta >= 65) {
    prezzoFinale = prezzoIntero  * 0.6 ;
    
}
// - 5 inserire l'output del prezzo finale all'esterno. 
console.log(prezzoFinale.toFixed(2) + ' €')