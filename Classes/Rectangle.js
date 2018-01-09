class Rectangle extends Object{
	constructor(x, y, width, height){
		super(x, y, width, height);
		this.color = "black"
	}
	
	draw(context) {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height);
	}
	
	
}