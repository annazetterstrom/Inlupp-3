
// Ber användaren mata in radien på cirkeln. 
let r = prompt("Hello, we are going to calculate the circles area and perimeter.\n What is the circles radie.");

// Funktion som räknar ut omkretsen 
function peri(){
    return 2 * Math.PI * r
}
// Funktion som räknar ut arean
function area(){
    return Math.PI * r * r
}
// Visar använadren resultatet
alert("The perimeter is: " + peri(r) + "/n The area is: " + area(r)); 







