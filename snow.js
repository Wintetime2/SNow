class snow {
    constructor(){
        var options ={
            restitution:0.5,
            friction:0.3,
            density:1.2,
                  }
         this.image = loadImage("snow4.png");
         this.body = Bodies.rectangle(random(10, 1190),random(0, 100),20,20,options);
         World.add(world, this.body);
    }

    respawn() {
        if(this.body.position.y > 400){
            Matter.Body.setPosition(this.body, {x:random(10, 1190), y:random(0, 100)});

        }
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 30, 30);
        pop();


    }


}