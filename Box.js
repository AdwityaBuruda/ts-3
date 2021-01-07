class Box{
  constructor(x, y, width, height,color) {
    
      var options = {
         
          restitution :0.4,
          friction :0.4,
          //isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color= color;
      World.add(world, this.body);
    }
    display(){
     if(this.body.speed<3){
       var angle = this.body.angle;
       push();
       translate(this.body.position.x, this.body.position.y);
       rotate(angle);
       imageMode(CENTER);
       image(this.image, 0, 0, this.width, this.height);
       pop();
     }
      else{
        World.remove(world, this.body);
        if(this.visibility>0){
          push();
          this.visibility = this.visibility-60;
          tint(255, this.visibility);
          image(this.body.position.x, this.body.position.y,this.width,this.height);
          pop();
        }
      }
     
      
    }





}
