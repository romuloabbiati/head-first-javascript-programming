var location1 = Math.floor(Math.random() * 5);
console.log(location1);
var location2 = location1 + 1;
console.log(location2);
var location3 = location1 + 2;
console.log(location3);
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while(!isSunk) {
  guess = prompt("Ready, aim, fire! (enter a number 0-6):");
  
  var compare = guess < 0 || guess > 6;  

  if(compare){
    alert("Enter a valid number!");
  } else {
    guesses += 1;
    if(guess == location1 || guess == location2 || guess ==  location3) {
     hits += 1;

      if(hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    }
  }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " + 
		"which means your shooting accuracy was " + (3/guesses);

alert(stats);
