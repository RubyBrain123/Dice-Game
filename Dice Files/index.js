
var randomnum1 = Math.floor( Math.random() *6) + 1;

var ranimg1 =  "dice" + randomnum1 + ".png";

var randomImage1 = "images/" + ranimg1;

document.querySelector("img.img1").setAttribute("src", randomImage1);

////////////////////////////////////////////////////////////////////////

var randomnum2 = Math.floor( Math.random() *6) + 1;

var ranimg2 =  "dice" + randomnum2 + ".png";

var randomImage2 = "images/" + ranimg2;

document.querySelector("img.img2").setAttribute("src", randomImage2);

///////////////////////////////////////////////////////////////////////


if(randomnum1>randomnum2){
  document.querySelector("h1").textContent="Player 1 Wins";
}
else if (randomnum1<randomnum2){
  document.querySelector("h1").textContent="Player 2 Wins";
}
else{
  document.querySelector("h1").textContent="Draw";
}
