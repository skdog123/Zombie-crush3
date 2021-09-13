class Link{
    constructor(bodyA,pointB)
    {
      var lastlink = bodyA.body.bodies.length-1;
     this.link = Constraint.create(
        {
          bodyA:bodyA.body.bodies[lastlink],
         // pointA:{x:0,y:0},
          pointB:pointB,
          //pointB:{x:0,y:0},
          length:1,
          stiffness:1
        });
        World.add(engine.world,this.link);
    }
     detach() {
      World.remove(engine.world,this.link);
    } 
}