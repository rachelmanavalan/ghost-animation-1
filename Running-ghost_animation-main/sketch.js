var ghost, ghostanimation
function preload() {
ghostanimation=loadAnimation("ghost1.png","ghost2.png","ghost3.png")
}

function setup(){
createCanvas(400,400)
ghost=createSprite(100,200,10,10)
ghost.addAnimation("ghost",ghostanimation)
ghost.scale=0.5;
}

function draw(){
background("lightgrey");
drawSprites(); 
}