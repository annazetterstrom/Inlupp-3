// Räkna ut fakultet på en siffra mellan 1-1000

while (true) {
    let tal = prompt('Ange ett tal mellan 1-1000'); 
    if (isNaN(tal)) {
        continue;
    } else if (tal > 1000 || tal < 1) {
        alert('Du måste ange ett tal mellan 1-1000');
    } else if (tal <= 1000) {
        document.write(tal + '! = ' +factorial(tal)) // Skriver ut resultatet på websidan
        break;
    }

}
// Formeln för fakultet
function factorial(tal) { 
    for (let i = tal - 1; i >= 1; i--) {  
        tal = tal * i; 
    }
    return tal;  // klar med loopen så returnerar du det muterade talet
}