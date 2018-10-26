// Frågar användaren vad längden på kateterna är. 
let x = prompt("Räkna ut hypotenusan på din triangel.\n Ange längden på x");
let y = prompt("Ange längden på y"); 

//  Funktion med formeln för att räkna ut hypotenusan hypotenusan.
Math.hypot = Math.hypot ||
function(x, y){ 
    return Math.sqrt(x*x + y*y)
}
// Visar användaren vad resultatet är
document.write("Hypothenusan är " + Math.hypot(x, y));


