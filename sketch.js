// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

var tank,cannonBall ,shooter,tankHead;


/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
        createCanvas(800,400);
tank=rect(20,350,120,60);
shooter=rect(35,300,60,40);
tankHead=circle(30,340,60,60);
cannonBall=circle(35,340,30,30);

}

function draw() {
// Remember to update the Matter Engine and set the background.
Enigine=engine.run;

background("white");


}


function keyReleased() {
    // Call the shoot method for the cannon.
    if (keyReleased("space")) {
        cannonBall.x=40;
        cannonBall.velocityX=3;        
    }
}