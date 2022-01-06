class box
{

constructor(x,y,w,h)
{
 this.body = Bodies.rectangle(x,y,w,h)
 this.width=w 
 this.height=h
 World.add(myworld,this.body)

}


display()
{
 
var pos = this.body.position;
push();
translate(pos.x,pos.y);
rectMode(CENTER)

fill("yellow")
pop();



}






























}