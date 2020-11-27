class Button {
    constructor(x, y, width, height, visiblity, buttonIsEnabled) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, this.options);
        // We are not adding any button to the world. If it is required for any other unique object, it can be added manually.
        if (visiblity != null) {
            this.visible = visiblity;
        }
        else {
            this.visible = true
        }

        if (buttonIsEnabled != null) {
            this.enabled = buttonIsEnabled;
        }
        else {
            this.enabled = true
        }
    }
    display(color) {
        if (this.visible) {
            if (color) {
                this.color = color;
            }
            else {
                this.color = "red";
            }
            rectMode(CENTER);
            push();
            fill(this.color);
            rect(this.body.position.x, this.body.position.y, this.width, this.height);
            pop();
        }
    }
}