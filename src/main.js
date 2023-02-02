// Array of dice images
let diceArray = [
    "images/dice1.png", 
    "images/dice2.png", 
    "images/dice3.png", 
    "images/dice4.png", 
    "images/dice5.png", 
    "images/dice6.png"
];

// Set two random dice to retrieve a random dice image from array
let randomDice1 = diceArray[Math.floor(Math.random() * diceArray.length)];
let randomDice2 = diceArray[Math.floor(Math.random() * diceArray.length)];

// Set random dice images for players 1 and 2, using setTimeout to emulate a wait time for "rolling"
setTimeout(function() {
    document.querySelector(".img1").setAttribute("src", randomDice1);
    }, 1000);
setTimeout(function() {
    document.querySelector(".img2").setAttribute("src", randomDice2);
    }, 1000);

// Main program logic
let message = document.querySelector("h2");

setTimeout(function() {
    if (randomDice1 > randomDice2) {
        message.innerHTML = "Player 1 Wins!";
        message.style.setProperty("color", "yellow");
    } else if (randomDice1 < randomDice2) {
        message.textContent = "Player 2 Wins!";
        message.style.setProperty("color", "#1DF515");
    } else {
        message.textContent = "It's a draw!"
        message.style.setProperty("color", "red");
    }
}, 1000);
// End of program