function setup() {
    canvasWidth = 1600;
    canvasHeight = 600;
    createCanvas(canvasWidth, canvasHeight);

    engine = Engine.create();
    world = engine.world;

    angleMode(RADIANS);
    moveBallAtEnd = false;
    ballHasBeenShot = false;
    gameDone = false;


    ground = new Ground(canvasWidth / 2, 585, canvasWidth, 30, { isStatic: true, friction: 4 });
    ball = new Paper(50, 500, 20, { restitution: 0.3, friction: 5, density: 1.2 });

    ball_x_speed_increaser = 0.8;
    ball_x_speed_decreaser = -0.8;

    side_EdgesWidth = 10;
    topAndBottom_EdgesHeight = 10;
    rightEdge = new Edge(canvasWidth + (side_EdgesWidth / 2), canvasHeight / 2, side_EdgesWidth, canvasHeight);
    leftEdge = new Edge(0 - (side_EdgesWidth / 2), canvasHeight / 2, side_EdgesWidth, canvasHeight);
    topEdge = new Edge(canvasWidth / 2, 0 - (topAndBottom_EdgesHeight / 2), canvasWidth, topAndBottom_EdgesHeight);
    bottomEdge = new Edge(canvasWidth / 2, canvasHeight + (topAndBottom_EdgesHeight / 2), canvasWidth, topAndBottom_EdgesHeight);

    bin_options = {
        restitution: 0,
        friction: 1,
        density: 400
    }

    binLeft = new BinPart(1175, 420, 150, bin_options, null);
    binRight = new BinPart(1425, 420, 150, bin_options, null);
    binBottom = new BinPart(1300, 520, 300, bin_options, PI / 2);

    joined_bin_1_options = {
        bodyA: binLeft.body,
        bodyB: binBottom.body,
        length: 0,
        stiffness: 1
    }
    joined_bin_2_options = {
        bodyA: binRight.body,
        bodyB: binBottom.body,
        length: 0,
        stiffness: 1
    }
    joined_bin_3_options = {
        bodyA: binRight.body,
        bodyB: binLeft.body,
        length: 0,
        stiffness: 1
    }

    bin1 = Constraint.create(joined_bin_1_options);
    bin2 = Constraint.create(joined_bin_2_options);
    bin3 = Constraint.create(joined_bin_3_options);

    World.add(world, bin1);
    World.add(world, bin2);
    World.add(world, bin3);

    Engine.run(engine);
}