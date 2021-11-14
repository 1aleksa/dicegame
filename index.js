
// Random Numbers

let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;

// Rolling the dices

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png"); //images/dice1.png-images/dice6.png
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png"); //images/dice1.png-images/dice6.png

// Displaying results

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player1 wins!";
} else {
  document.querySelector("h1").innerHTML = "Player2 wins! 🚩";
}
