class box {
    var options= {
        restitution:1,
    }
this.body=Bodies.rectangle(200,100,50,50,options);
World.add(world.this.body);

display() {
var pos=this.body.position;
rectMODE(CENTER);
fill(255);
rect(pos.x,pos.y,this.innerWidth,this.height);


}


}