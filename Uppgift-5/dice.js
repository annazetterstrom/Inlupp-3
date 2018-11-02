// Skapar funktionen randomDice
// en funktion som returnerar en array med 1000 random nummer mellan 1-6.
  function randomDice(){
      let diceArray = [];
      for(let i = 0; i < 1000; i++){
          diceArray.push(Math.floor(Math.random() * 6 + 1)); // Math.random * 6 kan ge ett heltal 0-6 därför lägger man till +1
      }
      return diceArray;
  }

  function print(){
    const diceArray = randomDice();  
  
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

  // Anropar fuktionen och skriver ut tabellerna 
  print();
  console.log('------------------'); 
  print();
  console.log('------------------');
  print(); 