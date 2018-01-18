class Text extends Object{
	constructor(message, font, color, x, y){
		super(x,y);
		this.message = message;
		this.font = font;
		this.color = color;
	}
	
	draw(context){
		context.font = this.font;
		context.fillStyle = this.color;
		context.fillText(this.message, this.x, this.y);
	}
}