class Tree {
	constructor(x, y) {
		this.x = x;
		this.y = y;


		this.position = createVector(this.x, this.y);

		this.image = loadImage("images/tree.png");

		this.width = width;
		this.height = height;
	}

	display() {
		imageMode(CENTER);
		image(this.image, this.position.x, this.position.y, 700, 630);
	}
}

