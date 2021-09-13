class Stone
{
  constructor(x, y, r) 
  {
    let options = {
     isStatic:false
     
    };
    
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world, this.body);
    this.image=loadImage("assets/stone.png")
    stones.push(this.body)
  }

  show() {
    let pos = this.body.position;
    push();
    imageMode(CENTER);
    noStroke();
    fill(148,127,146);
    image(this.image,pos.x,pos.y, this.r*1.7,this.r*1.7);
    pop();
  }
}