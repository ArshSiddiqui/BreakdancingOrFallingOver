console.log('Hello World');
var randPix = new Array("img/bd1.jpg", "img/fo1.jpg", "img/bd2.jpg", "img/fo2.jpg", "img/bd3.jpg", "img/fo3.jpg", "img/bd4.jpg", "img/fo4.jpg", "img/bd5.jpg", "img/fo5.jpg", "img/bd6.jpg", "img/fo6.jpg");
var randNum = Math.floor(Math.random() * randPix.length);
document.getElementById("image").src = randPix[randNum];
document.write(randPix[randNum]);
function breakd(){
  if (randPix[randNum].charAt(0) === 'b'){
    document.getElementById("btnbd").innerHTML = "CORRECT!";
  } else {
    document.getElementById("btnbd").innerHTML = "WRONG!";
  }
}
function fallo(){
  if (randPix[randNum].charAt(0) === 'f'){
    document.getElementById("btnfo").innerHTML = "CORRECT!";
  } else {
    document.getElementById("btnfo").innerHTML = "WRONG!";
  }
}
