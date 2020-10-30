var randomDiceP1 = Math.ceil(Math.random(6) * 6);
var randomDiceP2 = Math.ceil(Math.random(6) * 6);

if (randomDiceP1 === 1) {
    document.getElementsByClassName("dice").item(0).querySelector("img").setAttribute("src", "images/dice1.png");
} else if (randomDiceP1 === 2) {
    document.getElementsByClassName("dice").item(0).querySelector("img").setAttribute("src", "images/dice2.png");
}else if (randomDiceP1 === 3) {
    document.getElementsByClassName("dice").item(0).querySelector("img").setAttribute("src", "images/dice3.png");
}else if (randomDiceP1 === 4) {
    document.getElementsByClassName("dice").item(0).querySelector("img").setAttribute("src", "images/dice4.png");
}else if (randomDiceP1 === 5) {
    document.getElementsByClassName("dice").item(0).querySelector("img").setAttribute("src", "images/dice5.png");
}else {
    document.getElementsByClassName("dice").item(0).querySelector("img").setAttribute("src", "images/dice6.png");
}


if (randomDiceP2 === 1) {
    document.getElementsByClassName("dice").item(1).querySelector("img").setAttribute("src", "images/dice1.png");
} else if (randomDiceP2 === 2) {
    document.getElementsByClassName("dice").item(1).querySelector("img").setAttribute("src", "images/dice2.png");
}else if (randomDiceP2 === 3) {
    document.getElementsByClassName("dice").item(1).querySelector("img").setAttribute("src", "images/dice3.png");
}else if (randomDiceP2 === 4) {
    document.getElementsByClassName("dice").item(1).querySelector("img").setAttribute("src", "images/dice4.png");
}else if (randomDiceP2 === 5) {
    document.getElementsByClassName("dice").item(1).querySelector("img").setAttribute("src", "images/dice5.png");
}else {
    document.getElementsByClassName("dice").item(1).querySelector("img").setAttribute("src", "images/dice6.png");
}

if (randomDiceP1 > randomDiceP2) {
    document.querySelector("h1").innerText = "Player 1 Wins";
} else if (randomDiceP2 > randomDiceP1) {
    document.querySelector("h1").innerText = "Player 2 Wins";
} else {
    document.querySelector("h1").innerText = "Draw";
}