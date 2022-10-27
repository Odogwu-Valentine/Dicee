var randomNumber1 = (Math.floor(Math.random() * 6) + 1);
var randomDiceSource = ("dice" + randomNumber1);
var randomImageSource = ("images/" + randomDiceSource + ".png");
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = (Math.floor(Math.random() * 6) + 1);
var randomDiceSource2 = ("dice" + randomNumber2);
var randomImageSource2 = ("images/" + randomDiceSource2 + ".png");
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);
//to display who win
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏁🏁Player One Wins";
    document.querySelector("strong").innerHTML = "😀Case Resolved";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🏁🏁Player Two Wins";
    document.querySelector("strong").innerHTML = "😀Case Resolved";
} else {
    document.querySelector("h1").innerHTML = "🏁Draw🏁";
    document.querySelector("strong").innerHTML = "Perhaps try again 😑.";
}