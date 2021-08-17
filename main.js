console.log('Hello World');
var randPix = new Array("bd1.jpg", "fo1.jpg", "bd2.jpg", "fo2.jpg", "bd3.jpg", "fo3.jpg", "bd4.jpg", "fo4.jpg", "bd5.jpg", "fo5.jpg", "bd6.jpg", "fo6.jpg", "bd7.jpg", "fo7.jpg", "bd8.jpg", "fo8.jpg", "bd9.jpg", "fo9.jpg", "bd10.jpg", "fo10.jpg");
var randNum = Math.floor(Math.random() * randPix.length);
document.getElementById("image").src = randPix[randNum];
document.write(randPix[randNum]);
function breakd(){
  if (randPix[randNum].charAt(0) === 'b'){
    document.getElementById("btnbd").innerHTML = "CORRECT!";
    reload();
  } else {
    document.getElementById("btnbd").innerHTML = "WRONG!";
    reload();
  }
}
function fallo(){
  if (randPix[randNum].charAt(0) === 'f'){
    document.getElementById("btnfo").innerHTML = "CORRECT!";
    reload();
  } else {
    document.getElementById("btnfo").innerHTML = "WRONG!";
    reload();
  }
}
function reload(){
  setTimeout(() => console.log("First"), 1000)
  setTimeout(() => console.log("Second"), 2000)
  setTimeout(() => console.log("Third"), 3000)
  window.location.reload()
}
