function draw() {
	background(0);
	Engine.update(engine);
    rectMode(CENTER);
    displayObjectsImagesAndTexts();
    moveObjects();
}