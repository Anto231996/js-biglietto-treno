let kmToDo = parseInt(prompt("Quanti km vuoi percorrere?"));
document.getElementById("your-km-to-do").innerHTML = kmToDo;
console.log(kmToDo);

let yourAge = parseInt(prompt("Qual'e' la tua eta'"));
document.getElementById("your-age").innerHTML = yourAge;
console.log(yourAge);

let ticketPrice = kmToDo * .21;
document.getElementById("ticket-price").innerHTML = ticketPrice;
console.log(ticketPrice);