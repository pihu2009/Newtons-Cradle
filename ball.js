class attach
{
constructor(x,y,r)
{
var options=
{
 restitution:1.4,
 friction:0.8,
 density:0.9
}

this.body = Bodies.circle(x,y,r)
this.radius=r
World.add(myworld,this.body)

}

display()
{
var pos = this.body.position;
push();
translate(pos.x,pos.y)
radiusMode(CENTER)

fill("red")
pop();

}





}