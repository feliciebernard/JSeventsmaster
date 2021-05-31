//fonctionalité 1 & 1 bis

let footer = document.getElementsByTagName('footer');
let footerCounter = 0;

let onFooter = function() {
  footerCounter++;
  console.log(`clique numéro ${footerCounter}`);
}

footer[0].addEventListener('click', onFooter);


//fonctionalité 2

let hamburger = document.getElementsByClassName('navbar-toggler');

let onHamburger = function() {
  document.getElementById("navbarHeader").classList.toggle("collapse");
}

hamburger[0].addEventListener('click', onHamburger);


//fonctionalité 3

let firstCard = document.getElementsByClassName("card-text")[0];
let firstEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

let onFirstCard = function() {
  firstCard.style.color = "red";
}

firstEdit.addEventListener('click', onFirstCard);

//fonctionalité 4

let secondCard = document.getElementsByClassName("card-text")[1];
let secondEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

let onSecondCard = function() {
  if (secondCard.style.color === 'green') {
secondCard.style.color = '' ;
} else {
secondCard.style.color = 'green' ;
}
}

secondEdit.addEventListener('click', onSecondCard);

//fonctionalité 5

let navbarMain = document.getElementsByClassName('navbar')[0];

let onNavbarMain = function() {
  if (document.getElementsByTagName("link")[0].rel == "stylesheet")
    document.getElementsByTagName("link")[0].rel = "";
  else
    document.getElementsByTagName("link")[0].rel = "stylesheet"; 
}

navbarMain.addEventListener('click', onNavbarMain);

//fonctionalité 6

let viewButton = document.getElementsByClassName("btn btn-sm btn-success");
for(let f = 0; f < viewButton.length; f++){

let textCards = document.getElementsByClassName("card-text")[f];
let imageCards = document.getElementsByClassName("card-img-top")[f];



let onAllCards = function() {
  if (textCards.style.fontSize === '1em') {
textCards.style.fontSize = '0em' ;
} else {
textCards.style.fontSize = '1em' ;
}

if (imageCards.style.width === '100%') {
imageCards.style.width = '20%' ;
} else {
imageCards.style.width = '100%' ;
}

}
viewButton[f].addEventListener('mouseover', onAllCards);
}

//fonctionalité 7

//fonctionalité 8

//fonctionalité 9