class rope
{
    constructor(x,y)
    {
        options={
            isStatic:false
        }
this.x=x;
this.y=x;
this.body=Bodies.rectangle(x,y,options)
World.add(world,this.body)
    }
display()
{
var ropeposition=this.ropeposition
push()
translate(ropeposition.x,ropeposition.y)
rectMode(CENTER)
rect(0,0,this.x,this.y)
pop()

}
}