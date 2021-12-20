var randomnumber=6*Math.random();
randomnumber=(Math.ceil(randomnumber));
var s1="images/dice"+randomnumber+".png";
// document.getElementsByClassName("img1")[0].src=s1;

var randomnumber1=6*Math.random();
randomnumber1=(Math.ceil(randomnumber1));
 var s2="images/dice"+randomnumber1+".png";
// document.getElementsByClassName("img2")[0].src=s2;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",s1);


var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",s2);


if(randomnumber>randomnumber1)
document.querySelector("h1").innerHTML="Player 1 wins 🏴";
else if(randomnumber===randomnumber1)
document.querySelector("h1").innerHTML="Draw";
else if(randomnumber<randomnumber1)
document.querySelector("h1").innerHTML="Player 2 wins 🚩";

function fun(){
    location.reload();
}
