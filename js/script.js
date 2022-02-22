let kmToDo = parseInt(prompt("Quanti km vuoi percorrere?"));
document.getElementById("your-km-to-do").innerHTML = kmToDo;
console.log(kmToDo);

let yourAge = parseInt(prompt("Qual'e' la tua eta'"));
document.getElementById("your-age").innerHTML = yourAge;
console.log(yourAge);

let ticketPrice = ((kmToDo * .21).toFixed(1));
document.getElementById("ticket-price").innerHTML = ticketPrice + "€";
console.log(ticketPrice + "€");

let discount20 = (ticketPrice * 20) / 100;

let discount40 = (ticketPrice * 40) / 100;

if (yourAge < 18) {
    document.getElementById("discount").innerHTML = discount20 + "€";
    console.log(discount20 + "€")
  }
  else if (yourAge >= 65) {
    document.getElementById("discount").innerHTML = discount40 + "€";
    console.log(discount40 + "€")
  }

  if (yourAge < 18) {
    document.getElementById("total").innerHTML = (ticketPrice - discount20).toFixed(2) + "€";
    console.log((ticketPrice - discount20).toFixed(2) + "€");
  }
  else if (yourAge >= 65) {
    document.getElementById("total").innerHTML = (ticketPrice - discount40).toFixed(2) + "€";
    console.log((ticketPrice - discount40).toFixed(2) + "€");
  }