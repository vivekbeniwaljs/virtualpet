class Superhero{
    constructer(x,y,width, height){
        var option = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,width,height, options)
        this.width = width;
        this.height = height;
        this.image = loadImage("image/Superhero-01.png")
        World.add(world,this.body)
      }
    display(){
       var angle = this.body.angle;
       var pos= this.body.position;
       push()
       translate(this.body.position.x , this.body,position.y)
       imagemode(CENTER)
       this.image(this.image,0,0, this.width,this.height)
       pop()

    }



}