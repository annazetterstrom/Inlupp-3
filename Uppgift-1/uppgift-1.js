// Konstruktor som skapar en blueprint för att beskriva två personer
function Person(name, email, phone, address) {

    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;

    this.print = function () { // En funktion som skriver ut den aktuella informationen. 
        console.log(this.name + "\n\n" +
            this.address.streetAddress + "\n" +
            this.address.postalCode + "\n" +
            this.address.area);
    }
}

function Address(streetAddress, postalCode, area) {
    this.streetAddress = streetAddress;
    this.postalCode = postalCode;
    this.area = area;

}
// Skapar två objekt som skickar in argument till respektive objekts parametrar

let address1 = new Address("Tomtebodavägen 3A\n", "171 56 ", "Solna \n");
let Anna = new Person("Anna Zetterström", "anna@gmail.com", "0705476889", address1);

let address2 = new Address("Industrivägen 19\n", "171 67 ", "Solna");
let designtorget = new Person("Designtorget AB", "designtorget@gmail.com", "0769845772", address2);

// Anroppar och visar informationen
Anna.print();
designtorget.print();