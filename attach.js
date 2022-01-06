class attach
{

constructor(a,b)
{

var options=
{
bodyA:a,
pointB:b,
stiffness:0.04,
length:10
}
this.body=constraint.create(options)
this.pointB=b
World.add(myworld,this.body)
}

display()
{
if(this.body.bodyA)
{
var posa=this.body.bodyA.position
var posb=this.pointB

strokeWeight(3)
stroke("black")
line(posa.x-20,posa.y,posb.x-10,posb.y)
line(posa.x+20,posa.y,posb.x+15,posb.y)
line(posa.x-20,posa.y,posb.x-10,posb.y)
line(posa.x-20,posa.y,posb.x-10,posb.y)
line(posa.x-20,posa.y,posb.x-10,posb.y)


}










}


}

















