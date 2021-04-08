const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  bg = loadImage("snow1.jpg")

}


function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

  createCanvas(800,400);
  

  snow1 = new snow();
    snow2 = new snow();
    snow3 = new snow();
    snow4 = new snow();
    snow5 = new snow();
    snow6 = new snow();
    snow7 = new snow();
    snow8 = new snow();
    snow9 = new snow();
    snow10 = new snow();
    snow11 = new snow();
    snow12 = new snow();
    snow13 = new snow();
    snow14 = new snow();
    snow15 = new snow();
    snow16 = new snow();
    snow17 = new snow();
    snow18 = new snow();
    snow19 = new snow();
    snow20 = new snow();
    snow21 = new snow();
    snow22 = new snow();
    snow23 = new snow();
    snow24 = new snow();
    snow25 = new snow();
    snow26 = new snow();
    snow27 = new snow();
    snow28 = new snow();
    snow29 = new snow();
    snow30 = new snow();
    snow31 = new snow();
    snow32 = new snow();
    snow33 = new snow();
    snow34 = new snow();
    snow35 = new snow();
    snow36 = new snow();
    snow37 = new snow();
    snow38 = new snow();
    snow39 = new snow(385, 0);
    snow40 = new snow(395, 0);
    snow41 = new snow(405, 0);
    snow42 = new snow(415, 0);
    snow43 = new snow(425, 0);
    snow44 = new snow(435, 0);
    snow45 = new snow(445, 0);
    snow46 = new snow(455, 0);
    snow47 = new snow(465, 0);
    snow48 = new snow(475, 0);
    snow49 = new snow(485, 0);
}

function draw() {
  background(bg);  

  Engine.update(engine);
  snow1.display();
    snow2.display();
    snow3.display();
    snow4.display();
    snow5.display();
    snow6.display();
    snow7.display();
    snow8.display(); 
    snow9.display(); 
    snow10.display(); 
    snow11.display(); 
    snow12.display(); 
    snow13.display(); 
    snow14.display(); 
    snow15.display(); 
    snow16.display(); 
    snow17.display(); 
    snow18.display(); 
    snow19.display(); 
    snow20.display(); 
    snow21.display(); 
    snow22.display(); 
    snow23.display(); 
    snow24.display(); 
    snow25.display();
    snow26.display();
    snow27.display();
    snow28.display();
    snow29.display();
    snow30.display(); 
    snow31.display(); 
    snow32.display(); 
    snow33.display(); 
    snow34.display(); 
    snow35.display();
    snow36.display();
    snow37.display();
    snow38.display();
    snow39.display(); 
    snow40.display();
    snow41.display();
    snow42.display(); 
    snow43.display(); 
    snow44.display(); 
    snow45.display(); 
    snow46.display();
    snow47.display(); 
    snow48.display();
    snow49.display();

    snow1.respawn();
snow2.respawn();
snow3.respawn();
snow4.respawn();
snow5.respawn();
snow6.respawn();
snow6.respawn();
snow7.respawn();
snow8.respawn();
snow9.respawn();
snow10.respawn();
snow11.respawn();
snow12.respawn();
snow13.respawn();
snow14.respawn();
snow15.respawn();
snow16.respawn();
snow17.respawn();
snow18.respawn();
snow19.respawn();
snow20.respawn();
snow21.respawn();
snow22.respawn();
snow23.respawn();
snow24.respawn();
snow25.respawn();
snow26.respawn();
snow27.respawn();
snow28.respawn();
snow29.respawn();
snow30.respawn();
snow31.respawn();
snow32.respawn();
snow33.respawn();
snow34.respawn();
snow35.respawn();
snow36.respawn();
snow37.respawn();
snow38.respawn();
snow39.respawn();
snow40.respawn();
snow41.respawn();
snow42.respawn();
snow43.respawn();
snow44.respawn();
snow45.respawn();
snow46.respawn();
snow47.respawn();
snow48.respawn();
snow49.respawn();
}