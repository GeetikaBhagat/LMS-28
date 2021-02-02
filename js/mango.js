class Mango {
	constructor(x, y, r) {
		var options = {
			isStatic: true,
			restitution: 0,
			friction: 1,
			density: 1
		}
		this.body = Bodies.circle(x, y, r/2, options);
		this.image = loadImage("images/mango.png");
		this.x = x;
		this.y = y;
		this.r = r;
		World.add(world, this.body);
	}

	display() {
		var pos = this.body.position;
		push();
		// translate(pos.x, pos.y);
		// rotate(this.body.angle)
		imageMode(CENTER);
		image(this.image, pos.x, pos.y, this.r+10,this.r+10)
		pop();
	}
}