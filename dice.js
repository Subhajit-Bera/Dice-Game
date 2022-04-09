
// 1st image
var randomNumber1=Math.floor(Math.random()*6)+1; //Generate number from 1 to 6

var randomImage="dice"+randomNumber1+".png"; //dice1.png-dice2.png

var randomImageSource="images/"+randomImage;  //images/dice2.png;

var a=document.querySelectorAll("img")[0];
a.setAttribute("src",randomImageSource);



// 2nd image

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player1 Wins! "
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player2 Wins! 🚩"
}else{
    document.querySelector("h1").innerHTML="Draw!"
}