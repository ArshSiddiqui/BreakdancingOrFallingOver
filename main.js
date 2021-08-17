console.log('Hello World');
var randPix = new Array("bd1.jpg", "fo1.jpg");
var randNum = Math.floor(Math.random() * randPix.length);
document.getElementById("image").src = randPix[randNum];
document.write(randPix[randNum]);
function breakd(){
  document.getElementById("btnbd").innerHTML = "CLICKED!";
}
function fallo(){
  document.getEllementById("btnfo").innerHTML = "WOOW!";
}
