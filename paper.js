class Paper{
 constructor(){
    var options={
      isStatic:false,
      restitution:0.4,
      friction:0.75,
      density:1.2
      
    }
    this.image=loadImage("paper.png")
    this.body=Bodies.circle(200,643,20,options)
    World.add(world,this.body)
 } 
  display(){
    push();
    translate(this.body.position.x,this.body.position.y)
    rectMode(CENTER)
    imageMode(CENTER)
    image(this.image,0,0,50,50)
    pop();
  }  


}