let x = 0;
let y = 0;
let drawCircle = "";
let drawRect = "";

const SpeechRecognition = window.webkitSpeechRecognition;
  
const recognition = new SpeechRecognition();

function start() {
  document.getElementById("status").innerHTML = "The system is listening. Please speak."; 
  recognition.start();
} 
 
recognition.onresult = function(event) {
  console.log(event); 
  let content = event.results[0][0].transcript;
  document.getElementById("status").innerHTML = "Speech recognized as: " + content; 
  if(content =="circle" || content =="Circle"){
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);
    document.getElementById("status").innerHTML = "Drawing a circle."; 
    drawCircle = "set";
  } else if (content =="rectangle"|| content =="Rectangle"){
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);
    document.getElementById("status").innerHTML = "Drawing a rectangle."; 
    drawRect = "set";
  }
}

function setup() {
  canvas = createCanvas(900, 600);
}

function draw() {
  if(drawCircle == "set")
  {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle drawn. ";
    drawCircle = "";
  } else if(drawRect == "set")
  {
    rect(x,y,70,50);
    document.getElementById("status").innerHTML = "Rectangle drawn. ";
    drawRect = "";
  }

}








