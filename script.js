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

document.getElementsByClassName("navbar")[0].addEventListener("click", function(){
  if (document.getElementsByTagName("link")[0].rel == "stylesheet")           //if stylesheet is on, we turn it off
    document.getElementsByTagName("link")[0].rel = "styleDisabled";
  else
    document.getElementsByTagName("link")[0].rel = "stylesheet";
});;

//fonctionalité 6

//fonctionalité 7

//fonctionalité 8

//fonctionalité 9