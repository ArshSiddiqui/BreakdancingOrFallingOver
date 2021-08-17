console.log('Hello World');
var randPix = new Array("bd1.jpg", "fo1.jpg", "bd2.jpg", "fo2.jpg", "bd3.jpg", "fo3.jpg", "bd4.jpg", "fo4.jpg", "bd5.jpg", "fo5.jpg", "bd6.jpg", "fo6.jpg");
var randNum = Math.floor(Math.random() * randPix.length);
document.getElementById("image").src = randPix[randNum];
document.write(randPix[randNum]);
function breakd(){
  if (randPix[randNum].charAt(0) === 'b'){
    document.getElementById("btnbd").innerHTML = "CORRECT!";
    window.setTimeout(200000);
    window.location.reload()
  } else {
    document.getElementById("btnbd").innerHTML = "WRONG!";
    window.setTimeout(200000);
    window.location.reload()
  }
}
function fallo(){
  if (randPix[randNum].charAt(0) === 'f'){
    document.getElementById("btnfo").innerHTML = "CORRECT!";
    window.setTimeout(200000);
    window.location.reload()
  } else {
    document.getElementById("btnfo").innerHTML = "WRONG!";
    window.setTimeout(200000);
    window.location.reload()
  }
}
