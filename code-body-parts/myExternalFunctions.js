function displayObjectsImagesAndTexts() {
    push();
    stroke("white");
    line(binLeft.body.position.x + (binLeft.width / 2), binLeft.body.position.y,
        binBottom.body.position.x, binBottom.body.position.y - (binBottom.width / 2));

    line(binRight.body.position.x - (binRight.width / 2), binRight.body.position.y,
        binBottom.body.position.x, binBottom.body.position.y - (binBottom.width / 2));

    line(binLeft.body.position.x + (binLeft.width / 2), binLeft.body.position.y,
        binRight.body.position.x - (binRight.width / 2), binRight.body.position.y);
    pop();

    ball.display();
    ground.display();
    binLeft.display();
    binRight.display();
    binBottom.display();

    fill("lightgreen");
    textSize(30);
    if (!ballHasBeenShot) {
        textSize(23);
        text("Control your paper ball with your arrow keys, when you think you are ready to shoot, click on the 'Space bar' or the 'Up arrow key' to have a nice big shot!", 20, 120);
    }

    if (finalTextShouldDisplay()) {
        text("Yoohoo!! You put it. You are really an Aim Master! Refresh to Aim again.", 150, 120);
        gameDone = true;
    }
    if (lostTextShouldDisplay()) {
        text("Ohh no :(. You couldn't get the right aim. Please refresh to Aim again.", 150, 120);
        gameDone = true;
    }
}

function finalTextShouldDisplay() {
    return (ball.body.position.y < binBottom.body.position.y
        && ball.body.position.y > 380
        && ball.body.position.x > binLeft.body.position.x
        && ball.body.position.x < binRight.body.position.x);
}

function lostTextShouldDisplay() {
    return (ballHasBeenShot === true && ball.body.position.y > 549);
}

function moveObjects() {
    if (!gameDone && ball.body.position.y > 545) {
        if (keyDown(RIGHT_ARROW)) {
            ball_x_speed_increaser += 0.5;
            var ball_set_position_speed = {
                x: ball_x_speed_increaser,
                y: 0
            }
            Body.setVelocity(ball.body, ball_set_position_speed);
        }
        else {
            ball_x_speed_increaser = 0.2;
        }
        if (keyDown(LEFT_ARROW)) {
            ball_x_speed_decreaser -= 0.5;
            var ball_set_position_speed = {
                x: ball_x_speed_decreaser,
                y: 0
            }
            Body.setVelocity(ball.body, ball_set_position_speed);
        }
        else {
            ball_x_speed_decreaser = 0.2;
        }

        if (keyDown(UP_ARROW)) {
            ballHasBeenShot = true;
            Matter.Body.applyForce(ball.body, ball.body.position, { x: 78, y: -92 });
        }
    }
}