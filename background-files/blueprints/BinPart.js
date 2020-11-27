class BinPart {
    constructor(x, y, height, options, angle) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = height;
        this.options = options;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, this.options);
        World.add(world, this.body);
        Matter.Body.setAngle(this.body, angle);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        fill(217, 137, 34);
        rectMode(CENTER);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
}