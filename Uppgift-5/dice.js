/*
Skriv en funktion som har en uppgift att skapa 1000 slumpmässiga tal mellan 1 och 6. Metoden returnerar en array
T.ex. [4,5,6,3,1,5,2,3,6,2,4, ... ]
• Kalla funktionen randomDice()
• Skapa en ny funktion som du kallar print()
• Funktionen anropar randomDice() för att generera
en array med 1000 slumpmässig tal.
• I funktionen print() ska du gå igenom
alla tal och skapa en frekvenstabell
över förekomsten av ettor, tvåor, osv.
• Skriv ut tabellen i konsolfönstret.
• Testa programmet flera gånger för att kontrollera att du får olika tabeller vid varje körning.
*/
// Skapar funktionen randomDice
// en funktion som returnerar en array med 1000 random nummer mellan 1-6.
  function randomDice(){
      let diceArray = [];
      for(let i = 0; i < 1000; i++){
          diceArray.push(Math.floor(Math.random() * 6 + 1)); // math.random kan ge en nolla så därför läger man till +1 * 6 för att random returnerar 0-0.9
      }
      return diceArray;
  }
  
  function print(){
    const diceArray = randomDice();  // använder const för att diceArray inte kommer ändras 
    
    // lägger upp en räknare för varje nummer
    let one = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    let six = 0;
    
    diceArray.forEach(function(number) {   // Inkrementerar 1 till räknarna för varje gång numret förekommer 
      switch(number) {
        case 1: one++; break;
        case 2: two++; break;
        case 3: three++; break;
        case 4: four++; break;
        case 5: five++; break;
        case 6: six++; break;
        default: console.log('Opps, something went wrong'); break;
      }
    })
    // Skriver ut tabellen i konsolen 
      console.log('Frequency of the number one:\t' + one);
      console.log('Frequency of the number two:\t' + two);
      console.log('Frequency of the number three:\t' + three);
      console.log('Frequency of the number four:\t' + four);
      console.log('Frequency of the number five:\t' + five);
      console.log('Frequency of the number six:\t' + six);
  }
  print();
  console.log('------------------');
  print();
  console.log('------------------');
  print(); 