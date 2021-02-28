var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle = 0;
var gameState = "play";

var division1 = 0;
var division2 = 0;
var division3 = 0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    division1 = division1 + (Math.round(random(1, 12)) * 50);
    division2 = division2 + (Math.round(random(1, 12)) * 50);
    division3 = division3 + (Math.round(random(1, 12)) * 50);

    console.log(division1);
    console.log(division2);
    console.log(division3);
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text(division1,20,530);
  text(division1,100,530);
  text(division1,180,530);
  text(division1,260,530);
  text(division2,340,530);
  text(division2,420,530);
  text(division2,500,530);
  text(division3,580,530);
  text(division3,660,530);
  text(division3,740,530);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if(particle === 5){
     gameState = "end";
     textSize(100);
     text("Game Over", 150, 258);
   }

   //console.log(particle);

   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }*/
 
  for (var j = 0; j < particles.length; j++) {
    if(particles[j]!=null){
      particles[j].display();
 
      if(particles[j].body.position.y > 760){
        if(particles[j].body.position.x < 298){
          score = score + division1;
          particles[j] = null;

        }
        else if(particles[j].body.position.x > 299 && particles[j].body.position.x < 598){
          score = score + division2;
          particles[j] = null;

        }
        else if(particles[j].body.position.x > 599 && particles[j].body.position.x < 900){
          score = score + division3;
          particles[j] = null;

        }
      }
    }
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if(gameState !== "end"){
    //particles = new Particle(mouseX, 10, 10, 10);
    particles.push(new Particle(mouseX, 10, 10, 10));
    particle++;
  }
}