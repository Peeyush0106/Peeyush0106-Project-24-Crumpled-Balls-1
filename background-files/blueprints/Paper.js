class Paper {
    constructor(x, y, radius, options) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.options = options;
        this.body = Bodies.circle(this.x, this.y, this.radius, this.options);
        World.add(world, this.body);
    }
    display() {
        ellipse(this.body.position.x, this.body.position.y, (this.radius * 2));
    }
}