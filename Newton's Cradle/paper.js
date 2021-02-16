class paper
{
    constructor(x,y)
    {
options={
    isStatic:true
}
this.x=x;
this.y=y;
this.body=Bodies.rectangle(x,y,options)
World.add(world,this.body)
}
display()
{
var paperposition=this.paperposition
push()
translate(paperposition.x,paperposition.y)
rectMode(CENTER)
rect(0,0,this.x,this.y)
pop()
    
}
}