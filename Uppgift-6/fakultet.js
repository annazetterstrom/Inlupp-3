// Räkna ut fakultet
while (true) {
    let tal = prompt('Ange ett tal mellan 1-1000'); // Användaren matar in ett tal 
    if (tal === null) { // om man trycker på cancel
      alert('Hejdå'); 
        break;
    }
    if (tal.length == 0) { // Om man slår enter
        continue;
    } 
    else if (isNaN(tal)) { // om man trycker bokstöver t.ex
        alert("Inte ett tal mellan 1 - 1000");
        continue;
    }
    else if ((tal < 1) || (tal > 1000)) { // om talet är större eller mindre än det ska vara
        alert("Inte ett tal mellan 1 - 1000");
        continue;
    }
    let rt = factorial(tal); // kollar om talet är för stort för uträkningen
    if (!isFinite(rt)) {                               
        alert("Talet är för stort för att javascript ska räkna ut fakultet");
        continue;
    }
    else{
        document.write(tal + "!=" + rt); // // Skriver ut resultatet på websidan
        break;
    }

}
// Formeln för fakultet
function factorial(tal) {
    for (let i = tal - 1; i >= 1; i--) { 
        tal = tal * i; // räknar ut fakultet
    }
    return tal;
}