class Mango {
	constructor(x, y, radius) {
		var options = {
			isStatic: true,
			restitution: 0,
			friction: 1,
			density: 1
		}
		this.body = Bodies.circle(x, y, radius, options);
		this.image = loadImage("images/mango.png");
		this.x = x;
		this.y = y;
		this.r = radius;
		World.add(world, this.body);
	}

	display() {
		var pos = this.body.position;
		push();
		translate(pos.x, pos.y);
		rotate(this.body.angle)
		imageMode(CENTER);
		image(this.image, 0, 0, 50,50)
		pop();
	}
}