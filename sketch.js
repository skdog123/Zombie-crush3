const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var stones=[]

function preload() {
  zombie1 = loadImage("assets/zombie1.png");
  zombie2 = loadImage("assets/zombie2.png");
  zombie3 = loadImage("assets/zombie3.png");
  zombie4 = loadImage("assets/zombie4.png");
  bg = loadImage("assets/background.png");
  sadzombie = loadImage("./assets/sad_zombie.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
ground= new Base(width/2,height-10,width,20)
leftWall= new Base(100,height-300,200,600)
rightWall= new Base(width-100,height-300,200,600)
stone = new Stone(random(width/2-120,width/2+120),0,25)
stone2 = new Stone(random(width/2-120,width/2+120),0,25)
stone3 = new Stone(random(width/2-120,width/2+120),0,25)
stone4 = new Stone(random(width/2-120,width/2+120),0,25)
stone5 = new Stone(random(width/2-120,width/2+120),0,25)
stone6 = new Stone(random(width/2-120,width/2+120),0,25)
stone7 = new Stone(random(width/2-120,width/2+120),0,25)
stone8 = new Stone(random(width/2-120,width/2+120),0,25)

zombie = createSprite(width / 2, height - 110);
zombie.addAnimation("lefttoright", zombie1, zombie2, zombie1);
zombie.addAnimation("righttoleft", zombie3, zombie4, zombie3);
zombie.addImage("sad", sadzombie);
zombie.scale = 0.1;
zombie.velocityX = 10;

breakButton = createButton("");
breakButton.position(width - 200, height / 2 - 50);
breakButton.class("breakbutton");
breakButton.mouseClicked(handleButtonPress);

bridge=new Bridge(30,{x:200,y:height/2-70})
secondConnect = new Link(bridge,{x:width-230,y:height/2-70})
var render = Matter.Render.create({ element:document.body, engine:engine, options: { width:windowWidth, height:windowHeight, wireframes:false } }); Matter.Render.run(render);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.show()
  //leftWall.show()
  //rightWall.show()
 
  bridge.show()
  stone.show()
  stone2.show()
  stone3.show()
  stone4.show()
  stone5.show()
  stone6.show()
  stone7.show()
  stone8.show()

  stones[0]=stone
  stones[1]=stone2
  stones[2]=stone3
  stones[3]=stone4
  stones[4]=stone5
  stones[5]=stone6
  stones[6]=stone7
  stones[7]=stone8
  

  for (var i=0;i<stones.length;i++) {
    stones[i].show(); 
    var pos = stones[i].body.position;   
    var distance = dist(zombie.position.x, zombie.position.y, pos.x, pos.y);   
    if (distance <= 50) {    
    zombie.velocityX = 0;    
    Matter.Body.setVelocity(stones[i].body, { x: 10, y: -10 });    
    zombie.changeImage("sad");  
    collided = true;   
    }   
  }

  if (zombie.x >= width - 300) {
    zombie.velocityX = -10;
    zombie.changeAnimation("righttoleft");  
    }  
    if (zombie.x <= 300) {   
      zombie.velocityX = 10;
    zombie.changeAnimation("lefttoright"); 
    }  
    drawSprites()
}

function handleButtonPress() {
  secondConnect.detach();
  setTimeout(() => {
  bridge.break();
  }, 1500);
  }