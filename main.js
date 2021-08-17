console.log('Hello World');
var randPix = new Array("bd1.jpg", "fo1.jpg");
var randNum = Math.floor(Math.random() * randPix.length);
document.getElementById("image").src = randPix[randNum];
