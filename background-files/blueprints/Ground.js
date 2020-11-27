class Ground {
    constructor(x, y, width, height, options) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.options = options;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, this.options);
        World.add(world, this.body);
    }
    display() {
        rectMode(CENTER);
        fill(217, 137, 34);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}